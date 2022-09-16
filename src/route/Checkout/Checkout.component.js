import {Checkout as CheckoutRoute} from 'SourceRoute/Checkout/Checkout.component'
import ContentWrapper from 'Component/ContentWrapper';
import './Checkout.component.style'


class MyCheckout extends CheckoutRoute {
    render () {
        return (
            <main block="Checkout">
                <div className="progress-bar">
                    <div class="stepper-wrapper">
                        <div class="stepper-item active">
                            <div class="step-counter">1</div>
                            <div class="step-name">First</div>
                        </div>
                        <div class="stepper-item">
                            <div class="step-counter">2</div>
                            <div class="step-name">Second</div>
                        </div>
                    </div>
                </div>
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}


export default MyCheckout