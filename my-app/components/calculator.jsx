import PropTypes from 'prop-types'

const Calculator = ({n}) => {
    throw new Error("Error type 4")
    return ( 
        <p> Le double de {n} est {n+n}</p>
     );
}
 
Calculator.propTypes = {
    n : PropTypes.number.isRequired
}

export default Calculator;