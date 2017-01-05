const React = require('react')

class Product extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.string.isRequired,
  weight: weightCheck
}

module.exports = Product;


function weightCheck(props, propName, componentName) {  
  componentName = comopnentName || 'ANONYMOUS';

  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
        return value >= 80 && value <= 300 ? null : new Error(propName + ' in ' + componentName + " isn't in the right weight range.");
    }
  }

  // assume all ok
  return null;
}