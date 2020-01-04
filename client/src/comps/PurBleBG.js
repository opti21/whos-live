import React, { Component } from 'react'
import Helmet from 'react-helmet'


export default class PurBleBG extends Component {
    render() {
        return (

            <style type="text/css">{`
        body {
          /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#d632ff+0,6553db+100 */
          background: #d632ff; /* Old browsers */
          background: -moz-linear-gradient(left,  #d632ff 0%, #6553db 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(left,  #d632ff 0%,#6553db 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right,  #d632ff 0%,#6553db 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d632ff', endColorstr='#6553db',GradientType=1 ); /* IE6-9 */
          
        }
    `}</style>
        )
    }
}
