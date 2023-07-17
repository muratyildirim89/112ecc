import React from 'react';
import "../assets/css/Faq.css";

function Faq() {
    return (
        <div className={"faq"}>
            <h1 style={{textAlign:"center",padding:"1em"}}>Frequently Asked Questions</h1>
            <hr/>


            <div className="accordion accordion-flush" id="accordionFlush">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-one" aria-expanded="false"
                                aria-controls="question-one">
                            It was easier to call emergency services 01, 02 and 03 directly. Why were these numbers closed?
                        </button>
                    </h2>
                    <div id="question-one" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">
                            The two-digit numbers were possible for landline connection only. Mobile operators use different three-digit combinations 101, 011, 102, 022, 103, 033…
                            Remembering which number to call from a particular operator can be difficult in stressful situations. The emergency number 112 works in all networks. When faced with a problem, it is enough to call 112, and call takers will send the respective services for assistance. Moreover, 112 is available throughout Europe and outside of its territory.

                            Calling 112 has other advantages as well:
                            <br/>
                            <br/>
                            •  caller location can be determined during the call;
                            <br/>
                            •  emergency call has priority in the network, which is especially relevant during peak hours when mobile network is congested;
                            <br/>
                            •  if the SIM card does not work or cannot connect to your network, call to 112 will be transferred to another mobile operator;
                            <br/>
                            •  calling 112 is possible even when having an insufficient account balance or using a mobile phone without a SIM card;
                            <br/>
                            •  dialling 112 does not require unlocking the phone or entering a PIN.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-two" aria-expanded="false"
                                aria-controls="question-two">
                            Why do people looking for emergency help have to listen to the monologue “Sorry, all call takers are currently busy, do not hang up” when calling 112? After all, every second is very important in emergency situations.
                        </button>
                    </h2>
                    <div id="question-two" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">
                            The response time to calls during peak hours (e.g. weekend evenings, public holidays, adverse weather conditions, blizzards) increases. Callers hear this recording after 20 seconds of waiting. Its purpose is to inform the caller about the formed call queue so that he does not hang up, because having ended a call and redialled, the telephone station takes the caller back to the end of the queue.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-three" aria-expanded="false"
                                aria-controls="question-three">
                            How long has to and can a call with a 112 call taker last? What is the purpose of this call?
                        </button>
                    </h2>
                    <div id="question-three" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">The purpose of all the questions asked during calls is to find out what happened and where, so that correct information can be provided to emergency services.
                            According to the fire safety standard, a conversation with the call taker of the Emergency Response Centre with the caller in case of fire must last up to 1 minute. However, having alarmed forces, the call can continue to collect additional information about the incident.
                            When help of the police is needed, call duration is not subject to any standard requirements, because situations are different and complicated.
                            In the case of emergency medical services, the aim is to immediately connect to the dispatch centre of emergency medical services, so questions are asked about the location of the incident and the type of help that is needed only to make sure that no other emergency services are needed.
                            In all cases the aim is for calls to be as short as possible, and this is monitored through internal quality control of activities. When statistical data show deviations, reasons thereof are analysed.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-four" aria-expanded="false"
                                aria-controls="question-four">
                            Why call takers of the Emergency Response Centre answering calls do not introduce themselves?
                        </button>
                    </h2>
                    <div id="question-four" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">Call takers of the Emergency Response Centre do not have to introduce themselves to callers in order to speed up the response to calls for help of the callers. But if the caller so requests, the employee has to introduce himself telling the name of the institution or structural unit, his full name and job position.
                            However, the employee also has the right not to tell his surname or to introduce himself when he is threatened or being maliciously insulted.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-five" aria-expanded="false"
                                aria-controls="question-five">
                            Can the call taker of the Emergency Response Centre tell when emergency services will arrive at the scene?
                        </button>
                    </h2>
                    <div id="question-five" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">The duty of the call taker of the Emergency Response Centre is to assess the need for help, to find out the location of the incident and to prepare and transmit reports to respective emergency services according to the algorithms (response schemes, questions) provided by the respective emergency services. He does not control and is not responsible for the deployment of forces, i.e. his job functions do not provide for this duty.
                            Operational management units of the police control police crews, dispatchers of emergency medical services stations control emergency medical services crews, while the Emergency Response Centre itself controls operational activities of crews of the fire and rescue service only.
                            Call takers can see if the respective emergency services have received an incident card or if emergency medical services and police forces were assigned, but they cannot tell where they are at a particular time and when they will arrive at the scene.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-six" aria-expanded="false"
                                aria-controls="question-six">
                            How can a person with a hearing or speech impediment call help?
                        </button>
                    </h2>
                    <div id="question-six" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">There are several ways for persons with a hearing or speech impediment to communicate with the Emergency Response Centre:
                            1. mobile application of the emergency number 112;
                            2. sending an SMS to 112;
                            3. using the “Silent Call” service installed in the Emergency Response Centre;
                            4. using a remote translation service provided by sign language translation centres.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-seven" aria-expanded="false"
                                aria-controls="question-seven">
                            Can a request for help be sent as an SMS to 112?
                        </button>
                    </h2>
                    <div id="question-seven" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">Request for help can be sent by SMS, but we do not recommend doing so for several reasons.
                            First of all, calling for help by SMS takes a lot of time because correspondence is a slower way of communication compared to talking. It takes time to write a message, send it, and wait for a reply, and when urgent help is needed, those minutes can be fatal. According to a study conducted in Norway, calling for help by SMS usually takes about 20 minutes, while when calling, this is the time when emergency service can arrive at the scene.
                            On the other hand, SMS does not have a priority in the network and, if the network is very busy, it can be delivered after a certain time only, for example after 5 minutes or even an hour.
                            So, actually calling for help is both a more reliable and faster way to get help than sending an SMS. SMS can only be useful if a person calling for help cannot speak.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-eight" aria-expanded="false"
                                aria-controls="question-eight">
                            What languages can be used to call for emergency help in Lithuania?
                        </button>
                    </h2>
                    <div id="question-eight" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">Call takers of the Emergency Response Centre can accept requests for help in Lithuanian, Russian, Polish and English.
                            Lithuanian sign language interpreters are also available 24 hours a day to receive requests for assistance in Lithuanian sign language from users of the mobile application of the emergency number 112.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-nine" aria-expanded="false"
                                aria-controls="question-nine">
                            My attempts to call 112 failed: I heard a response that this number does not exist. Who is at fault?
                        </button>
                    </h2>
                    <div id="question-nine" className="accordion-collapse collapse"
                         data-bs-parent="#accordionFlush">
                        <div className="accordion-body">You could have faced such a problem when calling using a handset model made in China, which is intended for the Asian market. Such phone models were observed to dial 112 incorrectly.
                            To prevent this from happening, we recommend that you purchase a phone from reliable suppliers only, and having encountered such a problem, contact the seller or the authorized representative of the manufacturer notifying that the phone does not work the way it should.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;