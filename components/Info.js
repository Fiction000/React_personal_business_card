import React from "react"

export default function Info() {
    return (
        <div>
            <h2 className="info--name">Tatsuhiko Kato</h2>
            <h4 className="info--title">Frontend Developer</h4>
            <h5 className="info--website">tatsu.website</h5>
            <div className="info--buttons">
                <a href="mailto: hastur@me.com" target="_blank">
                    <button className="info--button--email"><img className="info--button--img" src="../images/mail.png" />  Email</button>
                </a>
                <a href="https://www.linkedin.com/in/tatsuhiko-kato-64b162118/" target="_blank">
                    <button className="info--button--linkedin"><img className="info--button--img" src="../images/linkedin.png" />  LinkedIn</button>
                </a>
            </div>
        </div>
    )
}