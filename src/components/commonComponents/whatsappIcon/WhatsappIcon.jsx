import FloatingWhatsApp from 'react-floating-whatsapp'

export default () => {
    return <FloatingWhatsApp
        phoneNumber="923138397222"
        accountName="Shaharyar"
        allowClickAway
        avatar="/images/pp.jpg"
        allowEsc={true}
        statusMessage="Wellcome to Redwood Assests"
        notificationSound = {true}
        chatMessage = "Hello there! Please Leave Your Message?"
    />
}