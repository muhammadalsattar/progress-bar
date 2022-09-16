import {CheckoutShipping as Shipping} from 'SourceComponent/CheckoutShipping/CheckoutShipping.component';
import { Form } from 'SourceComponent/Form/Form.component';
import { Loader } from 'SourceComponent/Loader/Loader.component';
import { SHIPPING_STEP } from 'Route/Checkout/Checkout.config';
import './CheckoutShipping.component.style.scss'


class ProgressShipping extends Shipping {
    render () {
        const {
            onShippingSuccess,
            onShippingError,
            isLoading
        } = this.props;
        return (
            <Form
              id={ SHIPPING_STEP }
              mix={ { block: 'CheckoutShipping' } }
              onSubmitError={ onShippingError }
              onSubmitSuccess={ onShippingSuccess }
            >
                <div className='progress-shipping'>
                    <p>fsdfsdfsdfsdfsfs</p>
                </div>
                
                { this.renderAddressBook() }
                <div>
                    <Loader isLoading={ isLoading } />
                    { this.renderDelivery() }
                    { this.renderActions() }
                </div>
            </Form>
        )
    }
}


export default ProgressShipping;