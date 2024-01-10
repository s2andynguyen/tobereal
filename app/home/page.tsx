import './style.css'
import RegisterNow from '@/components/RegisterNow/page'

import { JENIS_apartemen } from './Jenis'
import ShowJenisGr from './ui/ShowJenisGr/page'
function Home() {
    return (
        <div className='wrapper bg-white'>
            <div className='home-wrap h-[650px] md:h-[450px]'>
                <div className='Home-Solution container flex-col md:flex-row'>
                    <div className='title-Home text-center md:text-left'>
                        Chect out All ongoing promo
                    </div>
                    <RegisterNow />
                </div>
            </div>
            <div className='Jenis-wrap container flex flex-col gap-10'>
                <h3 className='title-reuse'>Apa Jenis Unit Anda?</h3>
                <div className='Apartemen-Jenis-Gr flex flex-col justify-center gap-7 lg:flex-row'>
                    {JENIS_apartemen?.map((card) => (
                        <ShowJenisGr data={card} key={card?.id} />
                    ))}
                </div>
            </div>
            <div className='Wrap-Service-Options container flex flex-col gap-10'>
                <h3 className='title-reuse'>Our Service Options</h3>
                <div className='PropertyManagement-wrap flex flex-col gap-10 w-full justify-between lg:flex-row'>
                    <img src={'/images/home/SerOptions.png'} alt='' />
                    <div className='informations-PM flex flex-col justify-between max-w-[493px]'>
                        <div className='content-PM flex flex-col gap-5 '>
                            <h4 className='title-reuse'>Property Management</h4>
                            <p className='text-PM'>
                                Professional management for your unit. Without any hassle,
                                fully furnished and standardized. Can be rented daily,
                                monthly and annually.
                            </p>
                        </div>
                        <button className='seeMore-btn wrap-btn'>See More</button>
                    </div>
                </div>
                <div className='PropertyManagement-wrap flex flex-col gap-10 w-full justify-between lg:flex-row'>
                    <div className='informations-PM flex flex-col justify-between max-w-[493px]'>
                        <div className='content-PM flex flex-col gap-5 '>
                            <h4 className='title-reuse'>SMART REAL Realty</h4>
                            <p className='text-PM'>
                                Professional management for your unit. Without any hassle,
                                fully furnished and standardized. Can be rented daily,
                                monthly and annually.
                            </p>
                        </div>
                        <button className='seeMore-btn wrap-btn'>See More</button>
                    </div>
                    <img src={'/images/home/RealtyOptions.png'} alt='' />
                </div>
            </div>
            <div className='wrap-Differences container !p-0'>
                <button className='Difference-btn title-Home text-center md:text-left'>
                    Difference between Apartment Management by
                    <br />
                    ............... and Home Marketing by .............
                </button>
                {/* <div className='tbl-wrap'>
                    <table className='tbl-difference'>
                        
                        <thead>
                            <tr>
                                <th className='title-difference'>
                                    Perbandingan Pengelolaan
                                </th>
                                <th className='title-difference'>
                                    Pengelolaan Apartemen oleh Travelio
                                </th>
                                <th className='title-difference'>
                                    Pemasaran Rumah oleh Travelio
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='flex flex-col'>
                                <td>Full Management Service</td>
                                <td>Mandatory Standardization of Unit Equipment</td>
                                <td>Check in by Travelio Staff</td>
                                <td>Check out by Travelio Staff</td>
                                <td>Unit Cleaning by Travelio Staff</td>
                                <td>Making contracts and guest legality</td>
                                <td>Withdrawals and Deposit Returns</td>
                                <td>Cut off water electricity when checking in</td>
                                <td>Cut off water electricity when checking out</td>
                                <td>Pre check in tenant relations</td>
                                <td>In-house tenant relations</td>
                                <td>Electricity calculation and billing</td>
                                <td>Calculation and collection of rent</td>
                                <td>Installment options and rental billing</td>
                                <td>Payment to Owner</td>
                                <td>Rental Term Options</td>
                                <td>Unit Top Shot*</td>
                                <td>Marketing on the travelio site</td>
                                <td>Marketing on real estate platforms</td>
                                <td>Marketing at online travel agents (daily rental)</td>
                                <td>Corporate Partners</td>
                                <td>Agent Partner</td>
                                <td>Revenue Management and Dynamic Pricing</td>
                            </tr>
                            <tr>
                                <td>wedqw</td>
                            </tr>
                            <tr></tr>
                        </tbody>
                    </table>
                </div> */}
                
            </div>
        </div>
    )
}

export default Home
