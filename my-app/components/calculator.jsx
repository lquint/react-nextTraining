import PropTypes from 'prop-types'

const Calculator = ({n}) => {
    return ( 
        <p> Le double de {n} est {n+n}</p>
     );
}
 
Calculator.propTypes = {
    n : PropTypes.number.isRequired
}

export default Calculator;