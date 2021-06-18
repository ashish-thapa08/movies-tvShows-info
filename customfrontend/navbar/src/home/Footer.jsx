import React from 'react'

export default function Footer() {
    let [date, setDate] = React.useState("");
    let Datee = () => {
        var d = new Date();
        var n = d.getFullYear();
        setDate(n)
    }
    React.useEffect(() => {
        Datee();
    })
    return (
        <>
            <section className="footerr mt-4">
                <footer className="page-footer font-small p-3 ">
                    <div className="footer-copyright text-center text-white">© {date} Developed by:
                        <img
                            src='./Bravegirl/logo.png'
                            width="60"
                            height="38"
                            className="d-inline-block align-top"
                            alt="logo"
                        /><a href="#" className="text-warning"> Ashish Thapa</a>
                    </div>
                </footer>
            </section>
        </>
    )
}
