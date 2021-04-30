export default function Card(props) {
    return <>
        <div class="col-xl-3 col-md-6 mb-4">
            <div class={`card ${props.place.border} shadow h-100 py-2`}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class={`text-xs font-weight-bold ${props.place.text} text-uppercase mb-1`}>
                                { props.place.name}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{ props.place.total}</div>
                        </div>
                        <div class="col-auto">
                            <i className={`fas ${props.place.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}