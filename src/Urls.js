//django api integration
export const server = 'https://fabrotest.zinfog.com/'
//odoo server
export const odooServer = 'https://fab.goldzin.com/'
//login
export const login = server + 'api/login/';
//auth
export const auth = odooServer + 'api/authenticate'
//brand name list
export const brandName = odooServer + 'api/search/vehicle/brand'
//send otp
export const sendOtp = server + 'api/send-otp/'
//verifyOtp
export const verifyOtp = server + 'api/verify-otp/'
//change password
export const changePswd = server + 'api/change-pass-forgot/'
//vehicle name
export const vehicleName = odooServer + 'api/search/vehicle/name'
//model
export const model = odooServer + 'api/search/vehicle/year'
//material
export const material = odooServer + 'api/search/vehicle/material'
//seat
export const seat = odooServer + 'api/search/vehicle/seat'
//material spec
export const matSpec = odooServer + 'api/search/vehicle/material/spec'
//color primary
export const primary = odooServer + 'api/search/vehicle/material/colour/prime'
//color secondary
export const secondary = odooServer + 'api/search/vehicle/material/colour/second'
//design
export const design = odooServer + 'api/search/vehicle/design'
//subdesign
export const subDesign = odooServer + 'api/search/vehicle/sub/design'
    