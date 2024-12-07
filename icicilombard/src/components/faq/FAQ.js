import React from 'react';
import "./FAQ.css";

function FAQ() {
  return (
    <div className='faq-container'>
        <h3>FAQs</h3>
        <p>Get answers to common questions about two wheeler insurance policy</p>
        <input type="text" placeholder='Search Here'/>
        <div className='faq-main'>
            <div className='faq-main-div'>
                <h3>What is two-wheeler insurance, and why is it necessary?</h3>
                <p>Two-wheeler insurance provides financial protection against damages, theft, accidents, or third-party liabilities involving your two-wheeler. It’s legally mandatory in India to have at least a Third-Party Liability insurance policy to ride on public roads.</p>
            </div>
            <div className='faq-main-div'>
                <h3> What are add-ons in a two-wheeler insurance policy?</h3>
                <p>Add-ons are optional covers that enhance your policy. Popular ones include:</p>
                <ul>
                    <li>
                    Zero Depreciation Cover: No depreciation deduction during claims.
                    </li>
                    <li>Roadside Assistance: Help during breakdowns.</li>
                        <li>Engine Protection: Covers engine repair costs due to water damage or leakage</li>

                </ul>
            </div>
            <div className='faq-main-div'>
                <h3>How is the premium for two-wheeler insurance calculated?</h3>
                <p>Premiums are calculated based on factors like:</p>
                <ul>
                    <li>Vehicle type, age, and location.</li>
                    <li>Coverage type (Third-Party or Comprehensive).</li>
                    <li>
                            
                        Add-ons chosen.
                    </li>
                    <li>No Claim Bonus (NCB) discounts.</li>
                </ul>
            </div>
            <div className='faq-main-div'>
                <h3>How can I claim insurance for two-wheeler damages?</h3>
                <ul>
                    <li>Inform your insurer immediately.</li>
<li>Submit the required documents (e.g., FIR for theft, policy details, and photos of damages).</li>
<li>The insurer will assess the claim and settle it based on the terms of your policy.</li>

                </ul>
            </div>
            <div className='faq-main-div'>
                <h3> What is a No Claim Bonus (NCB)?</h3>
                <p>NCB is a discount offered on your policy premium for every claim-free year, making renewals cheaper.</p>
            </div>
            <div className='faq-main-div'>
                <h3> Can I renew my two-wheeler insurance policy online?</h3>
                <p>Yes, most insurers offer a hassle-free online renewal process. You can renew even after your policy lapses (subject to inspection).</p>
            </div>
            <div className='faq-main-div'>
                <h3>What happens if I ride without insurance?</h3>
                <p>Riding without valid insurance is illegal in India and can result in fines or other legal penalties.</p>
            </div>
            <div className='faq-main-div'>
                <h3>What is Insured Declared Value (IDV)?</h3>
                <p>IDV is the maximum amount the insurer will pay if your two-wheeler is stolen or completely damaged. It’s based on the vehicle’s market value minus depreciation.</p>
            </div>
        </div>

    </div>
  )
}

export default FAQ