
function ServiceCard({ service }) {
    return (
        <div class="bg-white rounded-xl p-5 flex flex-col">
            <div className="text-xl capitalize font-bold mb-3">{ service.title }</div>
            <div className="text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</div>
        </div>
    )
}

export default ServiceCard
