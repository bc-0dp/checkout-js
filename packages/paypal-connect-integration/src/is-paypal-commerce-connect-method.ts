import { PaymentMethodId } from '@bigcommerce/checkout/payment-integration-api';

const isPayPalCommerceConnectMethod = (methodId?: string): boolean => {
    return (
        methodId === PaymentMethodId.PaypalCommerceCreditCards || // TODO: remove after A/B testing
        methodId === PaymentMethodId.PayPalCommerceAcceleratedCheckout
    );
};

export default isPayPalCommerceConnectMethod;
