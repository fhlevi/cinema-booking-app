'use client';

import * as React from 'react';
import {
    Root,
    Trigger,
    Portal,
    Overlay,
    Content,
    Title,
    Description,
    Close,
} from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { cn } from '@lib/cn';

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = Portal;

const DialogClose = Close;

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof Overlay>,
    React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
    <Overlay
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            className,
        )}
        {...props}
    />
));
DialogOverlay.displayName = Overlay.displayName;

const DialogContent = React.forwardRef<
    React.ElementRef<typeof Content>,
    React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <Content
            ref={ref}
            className={cn(
                'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
                className,
            )}
            {...props}
        >
            {children}
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
            </DialogClose>
        </Content>
    </DialogPortal>
));
DialogContent.displayName = Content.displayName;

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'flex flex-col space-y-1.5 text-center sm:text-left',
            className,
        )}
        {...props}
    />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
            className,
        )}
        {...props}
    />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof Title>,
    React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
    <Title
        ref={ref}
        className={cn('text-lg font-semibold leading-none tracking-tight', className)}
        {...props}
    />
));
DialogTitle.displayName = Title.displayName;

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof Description>,
    React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
    <Description
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
));
DialogDescription.displayName = Description.displayName;

interface SplitParagraphOptions {
    lang?: 'zh' | 'en';
    token_max_n?: number;
    token_min_n?: number;
    merge_len?: number;
    comma_split?: boolean;
    tokenize?: (text: string) => string[];
}

export function splitParagraph(
    text: string,
    options: SplitParagraphOptions = {},
): string[] {
    const {
        lang = 'en',
        token_max_n = 80,
        token_min_n = 60,
        merge_len = 20,
        comma_split = false,
        tokenize = (str) => str.split(/\s+/),
    } = options;

    const calcUttLength = (_text: string): number => {
        if (lang === 'zh') {
            return _text.length;
        } else {
            return tokenize(_text).length;
        }
    };

    const shouldMerge = (_text: string): boolean => {
        if (lang === 'zh') {
            return _text.length < merge_len;
        } else {
            return tokenize(_text).length < merge_len;
        }
    };

    let pounc: string[];
    if (lang === 'zh') {
        pounc = ['。', '？', '！', '；', '：', '、', '.', '?', '!', ';'];
    } else {
        pounc = ['.', '?', '!', ';', ':'];
    }
    if (comma_split) {
        pounc.push('，', ',');
    }

    if (!pounc.includes(text[text.length - 1])) {
        if (lang === 'zh') {
            text += '。';
        } else {
            text += '.';
        }
    }

    let st = 0;
    const utts: string[] = [];
    for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (pounc.includes(c)) {
            if (text.substring(st, i).length > 0) {
                utts.push(text.substring(st, i) + c);
            }
            if (i + 1 < text.length && ['"', '”'].includes(text[i + 1])) {
                const tmp = utts.pop();
                if (tmp) {
                    utts.push(tmp + text[i + 1]);
                }
                st = i + 2;
            } else {
                st = i + 1;
            }
        }
    }

    const finalUtts: string[] = [];
    let curUtt = '';
    for (const utt of utts) {
        if (
            calcUttLength(curUtt + utt) > token_max_n &&
            calcUttLength(curUtt) > token_min_n
        ) {
            finalUtts.push(curUtt);
            curUtt = '';
        }
        curUtt += utt;
    }

    if (curUtt.length > 0) {
        if (shouldMerge(curUtt) && finalUtts.length !== 0) {
            finalUtts[finalUtts.length - 1] += curUtt;
        } else {
            finalUtts.push(curUtt);
        }
    }

    return finalUtts;
}

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
