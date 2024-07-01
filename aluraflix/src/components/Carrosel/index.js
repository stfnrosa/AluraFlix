import Label from "components/Label"


const Carrosel = ({videoCategoria}) => {
    return (
        <div>
            <Label tamanho="pequeno" cor={videoCategoria.cor}>
                {videoCategoria.titulo}
            </Label>

        </div>
    )

}

export default Carrosel