import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {}

const HotTopicsCard = (props: Props) => {
    return (
        <Card className='col-span-4 '>
            <CardHeader >
                <CardTitle className='text-2xl font-bold'>
                    Hot Topics
                </CardTitle>

                <CardDescription>
                    Click on the topic to start a quiz on that topic!
                </CardDescription>
            </CardHeader>
            <CardContent>
                word cloud
            </CardContent>


        </Card>
    )
}

export default HotTopicsCard