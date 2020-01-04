import React, { Component } from 'react'
import Helmet from 'react-helmet'


export default class PurBleBG extends Component {
    render() {
        return (
            <style type="text/css">{`
        body {
            /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ff6063+0,e82e3a+100 */
            background: #ff6063; /* Old browsers */
            background: -moz-linear-gradient(top, #ff6063 0%, #e82e3a 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, #ff6063 0%,#e82e3a 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, #ff6063 0%,#e82e3a 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6063', endColorstr='#e82e3a',GradientType=0 ); /* IE6-9 */
          
        }
    `}</style>
        )
    }
}
