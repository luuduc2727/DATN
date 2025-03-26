import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Badge } from './ui/badge'
import { Avatar, AvatarImage } from './ui/avatar'
const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex justify-between items-center'>
                <p>2 days ago</p>
                <Button variant='outline' className='rounded-full' size='icon'><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2  my-2'>
                <Button className='p-6' variant='outline' size='icon'>
                    <Avatar>
                        <AvatarImage src='https://github.com/shadcn.png' />
                    </Avatar>
                </Button>
                <div>
                    <h1 >company name</h1>
                    <p>hanoi</p>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-bold'>Job Title</h1>
                <p className='text-sm text-gray-500'>Job Descriptionasdss sdsads a asdasdasd asdasd sadasdas  asd asd asd sad asd </p>
            </div>

            <div>
                <div className='flex items-center gap-2  mt-4'>
                    <Badge className="text-blue-500 font-bold" variant="ghost">
                        12 positions
                    </Badge>
                    <Badge className="text-[#F83002] font-bold" variant="ghost">Full time</Badge>
                    <Badge className="text-[#7209b7] font-bold" variant="ghost">10000$ - 20000$</Badge>
                </div>
            </div>

            <div className='flex items-center gap-4 mt-4'>
                <Button>Detail</Button>
                <Button>Save for later</Button>
            </div>

        </div>

    )
}

export default Job;
