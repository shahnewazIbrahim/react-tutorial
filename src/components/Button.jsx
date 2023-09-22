import React from "react";

class Button extends React.Component {
    render() { 
        const { change, locale, show } = this.props;

        return (
            <>
                <button type="button" onClick={change}>
                {locale === 'bn-BD'
                    ?
                    'Change Clock'
                    :
                    'ঘড়ি পরিবর্তন করুন'}
                </button>
                {
                    show &&
                    <p>
                        Hello
                    </p>
                }
                
            </>
        )
    }
}

export default Button;