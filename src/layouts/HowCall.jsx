import React from 'react';
import {useTranslation} from "react-i18next";
import "../assets/css/HowCall.css";
import {FcCallback, FcMultipleSmartphones, FcSimCardChip} from "react-icons/fc";
import {
    MdBusAlert,
    MdElectricBolt,
    MdEngineering,
    MdOutlineCarpenter,
    MdOutlineCarRepair,
    MdOutlineChangeCircle,
    MdOutlineDoNotTouch,
    MdOutlineEmergency,
    MdOutlineHearing,
    MdOutlineLyrics,
    MdOutlineSimCardAlert,
    MdRecordVoiceOver,
    MdSportsKabaddi,
    MdTaxiAlert
} from "react-icons/md";
import {AiOutlineSafety} from "react-icons/ai";
import {
    GiBlood,
    GiBurningForest,
    GiCrossedSwords,
    GiEmptyHourglass,
    GiFullPizza,
    GiMineExplosion,
    GiSnatch,
    GiSuicide,
    GiTrafficLightsOrange,
    GiWantedReward
} from "react-icons/gi";
import {TbMailFast, TbWindmillOff} from "react-icons/tb";
import {FaCarCrash, FaHouseDamage, FaStreetView, FaUserInjured} from "react-icons/fa";
import {BsFillChatDotsFill, BsPatchQuestionFill} from "react-icons/bs";
import {ImPhoneHangUp} from "react-icons/im";
import {BiPhoneOff} from "react-icons/bi";
import {PiPhoneCallFill} from "react-icons/pi";
import {FaPersonFallingBurst, FaUsersViewfinder} from "react-icons/fa6";
import {RiBubbleChartLine} from "react-icons/ri";
import {HiOutlinePhoneMissedCall} from "react-icons/hi";
import {TiSortNumericallyOutline} from "react-icons/ti";

function HowCall() {

    const {t} = useTranslation();

    return (
        <div className={"how-call"}>
            <nav id="when-call" className="navbar px-3 mb-3">
                {/*<a className="navbar-brand"> </a>*/}
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link second" href={"#how-to-call"}><MdOutlineEmergency/> {t("How to call 112")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link second" href={"#when-to-call"}><PiPhoneCallFill/> {t("When to call 112")}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link second"
                           href={"#when-not-to-call"}><HiOutlinePhoneMissedCall/> {t("When not to call 112")}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link second"
                           href={"#what-expect"}><TiSortNumericallyOutline/> {t("What to expect when calling 112")}</a>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#when-call" data-bs-root-margin="0 0 -40%"
                 data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2"
                 tabIndex="0">
                <h2 id="how-to-call">{t("How to call 112")}<MdOutlineEmergency className={"icons-set"}/></h2>
                <p>
                    {t("Calls to emergency number 112 usually are made in difficult conditions. Anxiety, fear, " +
                        "or fright in the face of a danger does not allow to focus, calmly assess the situation and" +
                        " instantly decide what to do to stay safe. Often trying to call emergency services, people" +
                        " simply forget the number, cannot dial it on the phone keypad, or, having successfully reached" +
                        " the call taker, tell him what happened to them and where. To be able to urgently call for" +
                        " emergency help in case of an accident, please read and remember these simple but helpful tips:"
                    )}
                    <br/>
                    <FcSimCardChip className={"icons-set"}/>
                    {t("You can call 112 without a SIM card and with an empty account")};
                    <br/>
                    <AiOutlineSafety className={"icons-set"}/>
                    {t("Choose (move to) a place where you can safely call 112")};
                    <br/>
                    <FcMultipleSmartphones className={"icons-set"}/>
                    {t("Dial three digits only – 1, 1, 2 – on your handset’s keypad. No country, city, or area codes are required")};
                    <br/>
                    <GiEmptyHourglass className={"icons-set"}/>
                    {t("Wait for the call taker to answer your call. If you end an ongoing call and make a new " +
                        "call, you will be moved to the end of the call queue and your call time will be extended")};
                    <br/>
                    <FcCallback className={"icons-set"}/>
                    {t("If you can, call 112 and talk to the call taker, having answered your call, yourself")};
                    <br/>
                    <TbMailFast className={"icons-set"}/>
                    {t("When the call taker answers, briefly and clearly explain to him what happened")};
                    <br/>
                    <FaStreetView className={"icons-set"}/>
                    {t("Tell him the exact address where help is needed. If you do not know the address, " +
                        "describe the location as accurately as possible (indicate the direction, distance, describe " +
                        "objects which you see)")};
                    <br/>
                    <BsPatchQuestionFill className={"icons-set"}/>
                    {t("Answer all the call taker’s questions – they help the services to respond more accurately")};
                    <br/>
                    <MdOutlineHearing className={"icons-set"}/>
                    {t("Listen to and follow call taker’s advice")};
                    <br/>
                    <ImPhoneHangUp className={"icons-set"}/>
                    {t("Do not hang up until the call taker says that the call can be ended")};
                    <br/>
                    <BiPhoneOff className={"icons-set"}/>
                    {t("After you hang up, try not to use your phone line, because emergency services may need" +
                        " to contact you")};
                    <br/>
                    <MdOutlineChangeCircle className={"icons-set"}/>
                    {t("If the situation changes at the scene of the accident (improves or worsens), call 112 again" +
                        " and report it")}.
                </p>
                <hr/>
                <h2 id="when-to-call"><PiPhoneCallFill className={"header-icon"}/>{t("When to call 112")}</h2>
                <p>
                    {t("Call emergency number 112 only when there is an actual threat to life, health, safety, the environment or property and when emergency services need to arrive at the scene of an emergency and provide emergency help immediately, for example, when")}:
                    <br/>
                    <GiBurningForest className={"icons-set"}/>
                    {t("There is a burning building, car, forest or smoke coming out of a building")};
                    <br/>
                    <MdOutlineDoNotTouch className={"icons-set"}/>
                    {t("A person, car or animal is drowning")};
                    <br/>
                    <FaCarCrash className={"icons-set"}/>
                    {t("People stuck in crushed cars, ruins or fallen trees must be freed")};
                    <br/>
                    <GiSnatch className={"icons-set"}/>
                    {t("Your purse, wallet or other items have been snatched from your hands")};
                    <br/>
                    <MdOutlineCarRepair className={"icons-set"}/>
                    {t("Attempts have been made to steal your car")};
                    <br/>
                    <FaHouseDamage className={"icons-set"}/>
                    {t("Attempts have been made to damage or destroy your property")};
                    <br/>
                    <FaUserInjured className={"icons-set"}/>
                    {t("You see an accident where people were injured")};
                    <br/>
                    <GiWantedReward className={"icons-set"}/>
                    {t("You spotted a person wanted by the police")};
                    <br/>
                    <MdSportsKabaddi className="icons-set"/>
                    {t("You see fighting")};
                    <br/>
                    <GiCrossedSwords className={"icons-set"}/>
                    {t("You face violence")};
                    <br/>
                    <GiMineExplosion className={"icons-set"}/>
                    {t("You come across an item similar to an explosive")};
                    <br/>
                    <GiSuicide className={"icons-set"}/>
                    {t("You suspect that a person attempts to commit a suicide")};
                    <br/>
                    <FaPersonFallingBurst className={"icons-set"}/>
                    {t("You see a person fallen on the knees or lying down, and suspect that he may be unconscious")};
                    <br/>
                    <GiBlood className="icons-set"/>
                    {t("You are bleeding and cannot stop it")};
                    <br/>
                    <TbWindmillOff className={"icons-set"}/>
                    {t("You see a person suffocating and unable to breathe")};
                    <br/>
                    <MdElectricBolt className={"icons-set"}/>
                    {t("You see that a person has suffered electric discharge-related injury (e. g. was hit by lightning, electric current)")};
                    <br/>
                    <MdOutlineCarpenter className={"icons-set"}/>
                    {t("An operating device cuts or otherwise injures a limb")}.
                    <br/>
                    <hr style={{border: "dotted red 1px"}}/>
                    {t("If you end up in a dangerous situation which is not on this list, DO NOT HESITATE and be sure to call 112 and report it")}!
                </p>
                <hr/>
                <h2 id="when-not-to-call"><HiOutlinePhoneMissedCall
                    className={"header-icon"}/>{t("When not to call 112")}</h2>
                <p>
                    {t("Persons who call 112 for other than its intended purpose cause great harm to the public and services. Mis-occupied phone lines and false reports do not allow people who really need help to get it. Therefore, use 112 responsibly and do not call if you want to")}:
                    <br/>
                    <MdOutlineLyrics className={"icons-set when-call"}/>
                    {t("Play a prank and to falsely call emergency services")};
                    <br/>
                    <BsFillChatDotsFill className={"icons-set when-call"}/>
                    {t("Chat with call takers")};
                    <br/>
                    <MdRecordVoiceOver className={"icons-set when-call"}/>
                    {t("Comment current events, actions or words of famous people")};
                    <br/>
                    <RiBubbleChartLine className={"icons-set when-call"}/>
                    {t("Complain about not being allowed into a club, bar, café or casino")};
                    <br/>
                    <MdEngineering className={"icons-set when-call"}/>
                    {t("Call emergency services in case of malfunctions in internal engineering networks of buildings")};
                    <br/>
                    <MdOutlineSimCardAlert className={"icons-set when-call"}/>
                    {t("Find out the PIN code of your SIM card")};
                    <br/>
                    <GiTrafficLightsOrange className={"icons-set when-call"}/>
                    {t("Complain about traffic lights that are down or traffic jams")};
                    <br/>
                    <FaUsersViewfinder className={"icons-set when-call"}/>
                    {t("Find out a phone number, address or type of activities of a person or an organization")};
                    <br/>
                    <MdBusAlert className={"icons-set when-call"}/>
                    {t("Find out bus, train or plane schedules")};
                    <br/>
                    <MdTaxiAlert className={"icons-set when-call"}/>
                    {t("Call a taxi")};
                    <br/>
                    <GiFullPizza className={"icons-set when-call"}/>
                    {t("Order flowers or a pizza")}.
                </p>
                <hr style={{color: "red"}}/>
                <p>
                    <b>{t("Please remember that malicious behaviour when calling 112 is subject to administrative and criminal liability")}:</b>
                    <br/>
                    {t("Interfering with work of the Emergency Response Centre knowing that help is not needed subjects to a warning or a fine from EUR 90 to EUR 200 (Article 493(1) of the Law on Administrative Offenses ofthe Republic of Lithuania)")}.
                </p>
                <hr/>
                <h2 id="what-expect"><TiSortNumericallyOutline
                    className={"header-icon"}/>{t("What to expect when calling 112")}</h2>
                <p>
                    {t("The Emergency Response Centre call taker having answered a call will: ask you to describe the situation and answer his questions; promptly assess the threat and decide on the help that is needed; immediately pass on information on the need for help to the relevant emergency services who will go to the scene. It often happens that several people report the same incident, so do not be surprised if the call taker will only ask for additional useful information about the incident and end the call. He does that in order to avoid a repetitive flow of information, to faster free up phone lines and to ensure that another person’s emergency call is answered without any undue delay")}.
                </p>
            </div>
        </div>
    );
}

export default HowCall;