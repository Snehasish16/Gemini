import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    const handleCardClick = (text) => {
        setInput(text);
        onSent(text);
    };

    return (
        <>
            <div className="main">
                <div className="nav">
                    <p>Gemini</p>
                    <img src={assets.user_icon} alt="" />
                </div>
                <div className="main-container">
                    {!showResult ? (
                        <>
                            <div className="greet">
                                <p>
                                    <span>Hello, Snehasish.</span>
                                </p>
                                <p>How can I help you today?</p>
                            </div>
                            <div className="cards">
                                <div
                                    className="card"
                                    onClick={() =>
                                        handleCardClick(
                                            "Suggest beautiful places to see on an upcoming road trip"
                                        )
                                    }
                                >
                                    <p>
                                        suggest beautiful places to see on an
                                        upcoming road trip or plan your next
                                        trip
                                    </p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div
                                    className="card"
                                    onClick={() =>
                                        handleCardClick(
                                            "Briefly summarize this concept: Machine Learning"
                                        )
                                    }
                                >
                                    <p>
                                        Briefly summarize this concept: Machine
                                        Learning
                                    </p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                                <div
                                    className="card"
                                    onClick={() =>
                                        handleCardClick(
                                            "Brainstorm team bonding activities for our work"
                                        )
                                    }
                                >
                                    <p>
                                        Brainstorm team bonding activities for
                                        our work
                                    </p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                                <div
                                    className="card"
                                    onClick={() =>
                                        handleCardClick(
                                            "Improve the readability of the following code"
                                        )
                                    }
                                >
                                    <p>
                                        Improve the readibility of the following
                                        code
                                    </p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="result">
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ? (
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                ) : (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: resultData,
                                        }}
                                    ></p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="main-bottom">
                        <div className="search-box">
                            <input
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                type="text"
                                placeholder="Enter a prompt here"
                            />
                            <div>
                                <img src={assets.gallery_icon} alt="" />
                                <img src={assets.mic_icon} alt="" />
                                {input ? (
                                    <img
                                        onClick={() => onSent()}
                                        src={assets.send_icon}
                                        alt=""
                                    />
                                ) : null}
                            </div>
                        </div>
                        <p className="bottom-info">
                            Gemini may display inaccurate info, including about
                            people, so double-check its responses. It's not
                            intended to replace professional advice.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
