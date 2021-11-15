import Image from 'next/image'

function ReviewCard({ review }) {
    return (
        <div className="flex flex-col flex-grow bg-white min-w-full p-5 space-y-3">
            <div className="text-blue-300 text-8xl">"</div>
            <div className="font-medium text-2xl">{review.title}</div>
            <div className="text-gray-500">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
            <div className="flex space-x-3">
                <Image className="rounded-full" src="https://via.placeholder.com/100" width={50} height={50} />
                <div className="flex flex-col">
                    <div className="capitalize font-medium">{review.author}</div>
                    <div className="capitalize text-gray-500">role</div>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
