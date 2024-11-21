export default function estadoCuenta({isPositive}){
    return(
        <div>
        {
            isPositive?  'Saldo Positivo': 'Saldo Negativo'

        }
    </div>
    )

}