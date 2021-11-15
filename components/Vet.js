import Image from 'next/image'

function Vet({ name }) {
    return (
        <div class="flex flex-col">
            <Image className="pb-4" src="https://via.placeholder.com/400" width={300} height={500} />
            <div className="font-medium text-xl capitalize">Dr. {name}</div>
            <div className="text-gray-500 capitalize">expert veterinarian</div>
        </div>
    )
}

export default Vet
