import React from "react";

function Page1() {
    return (

        <div Styles={{ display: 'flex', flexdirection: 'row' }}>
            <div style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '87%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#5F5A6B',
                    margin: '0'
                }}>Order id : <span style={{ fontWeight: '400' }}>2203331212</span></p>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#5F5A6B',
                    paddingLeft: '7%',
                    margin: '0'
                }}>Status : <span style={{ fontWeight: '400' }}>Shipment info shared</span></p>

                <button style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px', verticalAlign: 'center', marginLeft: '9%', padding: '1%', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                    Details &gt;
                </button>
            </div>
            <div style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '87%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#5F5A6B'
                }}>Order id : <span style={{ fontWeight: '400' }}>2203331212</span></p>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#5F5A6B',
                    paddingLeft: '7.5%'
                }}>Status : <span style={{ fontWeight: '400' }}>Tracking not generated</span></p>

                <button style={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px', marginLeft: '6%', padding: '1%', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                    Details &gt;
                </button>
            </div>
            <div style={{ borderRadius: '6px', marginBottom: '2%', padding: '2%', border: '1px solid #D9D9D9', width: '87%', height: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center' }}>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '600',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#5F5A6B'
                }}>Order id : <span style={{ fontWeight: '400' }}>2203331212</span></p>
                <p style={{
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '21px',
                    color: '#D54029',
                    paddingLeft: '8%'
                }}>Sorry ! Invalid order-id</p>

                <button style={{ display: 'flex', justifyContent: 'flex-end', fontWeight: '500', fontSize: '16px', lineHeight: '24px', marginLeft: '18%', padding: '1%', border: '1px solid white', borderRadius: '6px', backgroundColor: '#D54029', color: '#FFFFFF' }}>
                    Details &gt;
                </button>
            </div>
            <a href="http://localhost:3000/" style={{ color: '#0C77FF', fontFamily: 'Poppins', fontWeight: 400, fontSize: '12px', lineHeight: '18px', textAlign: 'center', textDecoration: 'underline', textDecorationColor: '#0C77FF' }}> Need help?</a>
            <div >
                <button
                    style={{
                        marginTop: '80%',
                        backgroundColor: 'white',
                        border: '1px solid black',
                        borderRadius: '6px',
                        padding: '1%',
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#121114',
                        textAlign: 'center',
                        width: '40%',
                        height: 'auto',
                        fontFamily: 'Poppins',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >
                    Back
                </button>


            </div>
        </div>

    )
}
export default Page1;