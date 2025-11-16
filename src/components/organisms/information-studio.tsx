import { Text } from '@components/atoms/text';
import { Card } from '@components/atoms/card';

interface Props {
    studioImage: string,
    studioName: string
}

export const InformationStudio = ({ 
    studioImage,
    studioName
}: Props) => {
    return (
        <section className='h-auto flex flex-col space-y-[35px] w-[250px]'>
            <div className="flex flex-col gap-[10px] text-[14px] font-regular">
                <Card className="h-[411px] block rounded-[20px] cursor-pointer" boxShadow>
                    <img src={studioImage} alt="studio-image" className="cover rounded-[20px] h-full" />
                </Card>
            </div>

            <div className='flex flex-col space-y-[18px] text-sm'>
                <Text className='text-[24px]'>{studioName}</Text>
                <Text>Movie description here...</Text>

                <section className='grid grid-cols-2'>
                    <Text>Duration</Text>
                    <Text>1h 58m</Text>
                </section>

                <section className='grid grid-cols-2'>
                    <Text>Type</Text>
                    <Text>Action</Text>
                </section>
            </div>
        </section>
    )
}