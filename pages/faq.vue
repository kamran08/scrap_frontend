<template>
    <div>
        <div class="_2content">
            <div class="_faq_banner">
                <div class="_faq_banner_pic">
                    <img class="_faq_banner_img" src="/img/city.jpg" alt="" title="">
                </div>
                <div class="_faq_banner_main">
                    <h1 class="_faq_banner_title">We're here to help you.</h1>
                    <div class="_faq_banner_search">
                        <input type="" placeholder="Search By Any Keyword">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>

            <div class="_faq_con">
                <div class="container">
                    <h1 class="_faq_title">Frequently Asked Questions</h1>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-12">
                            <div class="row">
                                <div class="col-12 col-md-3 col-lg-3">
                                    <ul class="_faq_left">
                                        <li class="_active">Activation and Deactivation</li>
                                        <li>Chat and messaging</li>
                                        <li>Company Info and Policies</li>
                                        <li>Friends and Followers</li>
                                        <li>Intellectual Property</li>
                                        <li>Membership Plans </li>
                                        <li>Notifications and Marketing Tools</li>
                                        <li>Password and Login</li>
                                        <li>Profile and Account Settings</li>
                                    </ul>
                                </div>

                                <div class="col-12 col-md col-lg">
                                    <div class="_faq_right">
                                        <h1 class="_faq_right_title">CHAT AND MESSAGING</h1>

                                        <Collapse v-model="value1">
                                            <Panel name="1">
                                                <i class="fas fa-plus _plus"></i>
                                                <i class="fas fa-minus _minus"></i>
                                                How do I activate an ad?
                                                <p slot="content">
                                                    1. Login to your account 2. Click Scrapabill red button. 3. Select type of ad to activate. 4. Fill out the form without leaving any blanks and ensure you upload correct and clear images. 5. Go to “Pending Ads,” then click “Activate.”
                                                </p>
                                            </Panel>
                                            <Panel name="2">
                                                <i class="fas fa-plus _plus"></i>
                                                <i class="fas fa-minus _minus"></i>
                                                Can I deactivate or suspend my account?
                                                <p slot="content">
                                                    Yes, you can suspend or deactivate your account for whatever reason.
                                                </p>
                                            </Panel>
                                            <Panel name="3">
                                                <i class="fas fa-plus _plus"></i>
                                                <i class="fas fa-minus _minus"></i>
                                                What happens when my account is deactivated or suspended?
                                                <p slot="content">
                                                    You may lose your benefits and rewards as well as the ability to transfer funds into your bill payment card and care cash account. You may also lose your current bill followers to other members
                                                </p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>