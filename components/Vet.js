import Image from 'next/image'

function Vet({ name }) {
    return (
        <div className="flex flex-col">
            <Image src="https://via.placeholder.com/400" width={300} height={500} />
            <div className="font-medium pt-5 text-xl capitalize">Dr. {name}</div>
            <div className="text-gray-500 capitalize">expert veterinarian</div>
        </div>
    )
}

export default Vet
