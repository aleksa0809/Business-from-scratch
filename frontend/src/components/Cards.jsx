import Card from './Card'

export default function (props) {

    const {products} = props

    return (
        <div className="row">
            {products.map(card => <Card {...card} />)}
        </div>
    )
}
