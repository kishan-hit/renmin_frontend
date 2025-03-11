import React from 'react';
import { motion } from "framer-motion";


const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const Bachelors = () => {
    return (
        <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-32 mt-16 md:mt-20">
            <motion.h2
                className="text-center text-blue-900 text-4xl font-bold mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Bachelors
            </motion.h2>

            <motion.h4
                className="text-gray-900 text-xl mx-auto mb-2 font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Why Choose China for Bachelor&#39;s Degree Courses? -
            </motion.h4>

            <motion.ol
                className="list-decimal list-inside text-blue-900 text-lg space-y-6 mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Diverse Programs in English and Chinese:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        China’s universities offer a wide range of programs for international students, many
                        of which are available in English. Whether you&#39;re interested in studying business,
                        engineering, medicine, arts, or social sciences, Chinese universities provide a
                        variety of options for Bachelor&#39;s courses. As Chinese universities aim to attract
                        international students, many top programs, especially those in STEM fields and
                        business, are available in English. If you are interested in learning the Chinese
                        language, universities also offer Chinese language programs or Bachelor&#39;s degrees
                        taught in Chinese.
                        <br />
                        Here are some of the popular fields of study available in China for international
                        students:
                    </span>

                    <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Engineering:</span> Civil, Mechanical, Electrical, Chemical, etc.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Business Administration (BBA/MBA):</span> Management, International Business,
                            Finance, Marketing.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Medicine (MBBS):</span> Standard MBBS programs are available in English.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Science:</span> Biology, Physics, Chemistry, Environmental Sciences.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Arts and Humanities:</span> Literature, International Relations, History, Sociology.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Social Sciences:</span> Political Science, Psychology, Economics, etc.
                        </motion.li>
                    </motion.ul>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Research and Development Opportunities:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        Chinese universities are becoming centers of innovation and research, especially in
                        fields like artificial intelligence (AI), robotics, space technology, and sustainable
                        development. Many of the programs for international students include opportunities
                        to work on research projects, and universities maintain strong connections with
                        industries and the government. Students who choose to study in China will have
                        the opportunity to participate in these exciting fields of study, potentially leading to
                        collaboration with major technology companies or government-led research projects.
                    </span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Language Learning Opportunities:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        Even though many programs are offered in English, one of the main advantages of
                        studying in China is the ability to learn Mandarin, the most widely spoken language
                        in the world. The demand for Mandarin speakers is growing globally, especially in
                        international business, diplomacy, and trade. Chinese universities also offer
                        language immersion programs, so students can either learn Chinese as part of their
                        academic program or take additional language courses alongside their primary
                        studies. Acquiring fluency in Mandarin will help you significantly improve your
                        employability in China, India, and internationally.
                    </span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Vibrant Campus Life:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        Chinese universities offer an exciting campus life, with diverse cultural, recreational,
                        and academic activities. Students can engage in various student clubs, sports, and
                        extracurricular activities. Moreover, international students often have the opportunity
                        to celebrate traditional Chinese festivals, such as Chinese New Year and the Mid-
                        Autumn Festival, giving them a deeper understanding of Chinese traditions and
                        customs.
                    </span>
                </motion.li>
            </motion.ol>

            <motion.h4
                className="text-gray-900 text-xl mx-auto mb-2 font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Scholarships for Bachelor’s Programs in China -
            </motion.h4>

            <motion.div
                className="text-gray-700 text-lg mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                There are multiple scholarship options available for international students seeking to
                study in China. The scholarships can cover various expenses, including tuition fees,
                accommodation, living costs, and even travel expenses. Below, we will look in-depth
                into the various scholarship options.
            </motion.div>

            <motion.ol
                className="list-decimal list-inside text-blue-900 text-lg space-y-6 mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Chinese Government Scholarship (CGS):
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        The Chinese Government Scholarship (CGS), administered by the China
                        Scholarship Council (CSC), is one of the most prestigious and popular scholarships
                        available for international students. The scholarship covers tuition fees,
                        accommodation, and a monthly living stipend.
                    </span>

                    <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Scholarship Coverage:</span> Full tuition fee, accommodation allowance, medical
                            insurance, and living stipend.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Stipend:</span> The living stipend typically ranges from CNY 2,000 to CNY 2,500
                            per month, depending on the university.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Eligibility:</span> This scholarship is open to students from all countries. Generally,
                            students must be under the age of 25 for Bachelor’s degree programs.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Application Process:</span> The application is processed through the Chinese
                            universities, and the application forms are available on the China Scholarship
                            Council website. Renmin Education Consultancy assists students in
                            understanding the application procedure and submitting required documents.
                        </motion.li>
                    </motion.ul>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Confucius Institute Scholarship:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        The Confucius Institute Scholarship is a special initiative aimed at encouraging
                        international students to learn Chinese language and culture. This scholarship is
                        mainly for students intending to pursue a Bachelor&#39;s degree in Chinese language
                        and culture or those who plan to become Chinese language teachers.
                    </span>

                    <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Scholarship Coverage:</span> Full tuition, accommodation, living stipend, and medical insurance.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Stipend:</span> Typically, students receive CNY 2,500 per month as a living stipend.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Eligibility:</span> Open to international students with a passion for Chinese language
                            and culture. The scholarship is available for those wishing to study Chinese
                            language and related fields at various Chinese universities.
                        </motion.li>
                    </motion.ul>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        University-Specific Scholarships:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        Many Chinese universities offer scholarships to attract high-achieving international
                        students. Some of the leading universities offering such scholarships include:
                    </span>

                    <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 mb-2 pl-6">
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Tsinghua University</span>
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Peking University</span>
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Fudan University</span>
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Zhejiang University</span>
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Shanghai Jiao Tong University</span>
                        </motion.li>
                    </motion.ul>
                    <span className="text-gray-700">
                        These scholarships vary in terms of the coverage they offer. While some provide
                        partial coverage of tuition fees, others may offer full coverage for both tuition and
                        living costs. Renmin Education Consultancy helps students research and apply for
                        the university-specific scholarships based on their academic profile and program of
                        interest.
                    </span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Belt and Road Scholarship:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        China’s Belt and Road Initiative (BRI) is aimed at fostering international cooperation
                        between countries along the ancient Silk Road. Many countries, including India, are
                        part of this initiative, and Chinese universities offer Belt and Road Scholarships to
                        students from these countries.
                    </span>

                    <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 pl-6">
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Scholarship Coverage:</span> Full tuition fees, accommodation, living stipend, and medical insurance.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Stipend:</span> Students typically receive CNY 2,000 to CNY 3,000 per month.
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Eligibility:</span> Available to students from countries participating in China’s Belt
                            and Road initiative.
                        </motion.li>
                    </motion.ul>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Provincial and Municipal Scholarships:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        Several provinces and municipalities in China also provide scholarships to
                        international students. These scholarships are typically offered in collaboration with the central government and aim to attract talented students to study in specific
                        regions of China.
                        <br />
                        Examples of provincial scholarships include:
                    </span>

                    <motion.ul className="list-disc list-inside text-gray-700 text-base space-y-2 mt-2 mb-2 pl-6">
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Beijing Government Scholarship</span>
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Shanghai Government Scholarship</span>
                        </motion.li>
                        <motion.li variants={fadeInVariants}>
                            <span className="font-semibold text-gray-900">Guangdong Province Scholarship</span>
                        </motion.li>
                    </motion.ul>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">
                        Corporate Scholarships:
                    </span>
                    <span className="text-gray-700">
                        {" "}
                        In addition to government and university scholarships, there are also corporate
                        scholarships available for international students. Companies in China, particularly in
                        the technology, automotive, and manufacturing sectors, may offer scholarships to
                        students studying in related fields such as engineering, business, and technology.
                    </span>
                </motion.li>
            </motion.ol>

            <motion.h4
                className="text-gray-900 text-xl mx-auto mb-2 font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Benefits of Studying Bachelor&#39;s in China Under Scholarship -
            </motion.h4>

            <motion.ol
                className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">No Tuition Fees or Low Tuition Fees:</span><span className='text-gray-700'> The primary benefit of receiving a scholarship is that it significantly reduces or
                        completely eliminates the cost of tuition fees. This makes studying in China much
                        more affordable than in other countries. In addition, many scholarships cover
                        accommodation and living expenses, so students can focus solely on their
                        academic studies.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Quality of Education:</span><span className='text-gray-700'> China’s universities are among the top-ranked globally and have a reputation for
                        offering high-quality education in a variety of fields. As an international student, you
                        will be exposed to advanced learning methods, cutting-edge research, and world-
                        class faculty members who are experts in their fields.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Comprehensive Support:</span><span className='text-gray-700'> Renmin Education Consultancy provides comprehensive support to students
                        throughout their journey. From university selection, application process, and
                        document preparation, to visa guidance and accommodation, Renmin Education consultancy ensures that students receive complete assistance at every stage of
                        their study abroad journey.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Networking Opportunities:</span><span className='text-gray-700'> Studying in China opens up numerous networking opportunities with peers from all
                        around the world. International students studying in Chinese universities have the
                        chance to connect with fellow students, faculty members, and industry professionals.
                        This can lead to career opportunities and long-term professional relationships.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Cultural Exposure:</span><span className='text-gray-700'> Living in China gives students the chance to experience a culture that is distinct
                        and rich in history. Students can explore China’s various regions, traditions, and
                        cuisines, while also learning Mandarin. These experiences enrich students’ personal
                        growth and provide them with a global perspective, which is essential in today’s
                        interconnected world.</span>
                </motion.li>
            </motion.ol>

            <motion.h4
                className="text-gray-900 text-xl mx-auto mb-2 font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                How Renmin Education Consultancy Helps Students -
            </motion.h4>

            <motion.div
                className="text-gray-700 text-lg mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Renmin Education Consultancy is dedicated to guiding students through every step
                of the process when applying to study in China. Here’s how we can assist:
            </motion.div>

            <motion.ol
                className="list-decimal list-inside text-blue-900 text-lg space-y-4 mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">University and Course Selection:</span><span className='text-gray-700'> We help students identify the right university and Bachelor’s program that fits their
                        interests and academic background. Whether you are interested in business,
                        medicine, engineering, or social sciences, we assist you in selecting universities
                        that offer the programs you are interested in.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Scholarship Application Assistance:</span><span className='text-gray-700'> Renmin Education Consultancy has deep knowledge of the available scholarships
                        and assists students in applying for them. We provide guidance on filling out
                        applications, writing personal statements, and preparing other required documents.
                        We also offer expert advice to increase your chances of being awarded a
                        scholarship.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Visa Guidance and Documentation:</span><span className='text-gray-700'> Our team helps students with the visa application process. We guide students in
                        obtaining the Chinese student visa (X Visa) by ensuring that all documentation is in
                        order and helping them understand the visa requirements.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Pre-Departure Assistance:</span><span className='text-gray-700'> Once you have been accepted into a university and received your scholarship,
                        Renmin Education Consultancy continues to provide assistance, ensuring a smooth
                        transition to China. This includes advice on accommodation, health insurance, and
                        other practical aspects of studying abroad.</span>
                </motion.li>
                <motion.li variants={fadeInVariants}>
                    <span className="font-bold text-blue-900">Post-Arrival Support:</span><span className='text-gray-700'> Even after you arrive in China, Renmin Education Consultancy offers continued
                        support. We help students adjust to life in China, understand the local culture, and
                        ensure that they have all the resources necessary for a successful academic
                        experience.</span>
                </motion.li>
            </motion.ol>

            <motion.h4
                className="text-gray-900 text-xl mx-auto md:mt-2 lg:mt-4 mb-2 font-bold"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Conclusion -
            </motion.h4>

            <motion.div
                className="text-gray-700 text-lg mx-auto mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
            >
                Studying for a Bachelor’s degree in China under scholarship is an opportunity that
                offers immense academic, financial, and cultural benefits. China’s world-class
                universities, combined with affordable living costs and a range of scholarship
                opportunities, make it an ideal destination for international students. Renmin
                Education Consultancy is your trusted partner in ensuring that your journey to
                studying in China is smooth and successful. From university selection and
                scholarship applications to visa assistance and cultural orientation, we are here to
                guide you every step of the way.
                <br />
                Start your journey today and experience the educational excellence that China has
                to offer!
            </motion.div>
        </section>
    )
}

export default Bachelors;