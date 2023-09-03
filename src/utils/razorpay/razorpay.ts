export const handlePayment = async (amount: string, Razorpay: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}api`);
  const order_id = await response.json();
  const options = {
    key: "rzp_test_oFW3klARVMsOoT",
    amount: amount,
    currency: "INR",
    name: "FAKEFICATE",
    description: "Pay to get the certificate",
    image:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    order_id: order_id.id,
    handler: function (response: any) {
      alert(response.razorpay_order_id);
    },
    // prefill: {
    //   name,
    //   email,
    //   contact,
    // },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#18181B",
    },
  };
  const rzpay = new Razorpay(options);
  rzpay.on("payment.failed", function (response: any) {
    alert(response.error.code);
  });
  rzpay.open();
};
