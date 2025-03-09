import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  const countryData = {
    India: {
      states: ["Arunachal Pradesh", "Andhra Pradesh", "Assam", "Bihar", "Jharkhand", "Gujarat", "Haryana", "Himachal Pradesh", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Meghalaya", "Nagaland", "Orisha", "Punjab", "Rajasthan", "Tamilnadu", "Uttar Pradesh", "Chhattisgarh", "Manipur", "Tripura", "Sikkim", "Mizoram", "Goa", "Delhi", "Uttarakhand", "West Bengal"],
      cities: {
        "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
        "Arunachal Pradesh": ["Itanagar", "Tawang", "Pasighat", "Ziro"],
        "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat"],
        "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
        "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba"],
        "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
        "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
        "Haryana": ["Chandigarh", "Faridabad", "Gurgaon", "Hisar"],
        "Himachal Pradesh": ["Shimla", "Manali", "Dharamshala", "Kullu"],
        "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
        "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli"],
        "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
        "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
        "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
        "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Ukhrul"],
        "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongstoin"],
        "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
        "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
        "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Sambalpur"],
        "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
        "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
        "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan"],
        "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
        "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam"],
        "Tripura": ["Agartala", "Dharmanagar", "Udaipur", "Ambassa"],
        "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi"],
        "Uttarakhand": ["Dehradun", "Haridwar", "Rishikesh", "Nainital"],
        "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"]
      }
    },
    Russia: {
      states: ["Moscow Oblast", "Saint Petersburg Oblast", "Novosibirsk Oblast", "Sverdlovsk Oblast", "Krasnodar Krai", "Rostov Oblast", "Tatarstan"],
      cities: {
        "Moscow Oblast": ["Moscow", "Khimki", "Balashikha", "Podolsk"],
        "Saint Petersburg Oblast": ["Saint Petersburg", "Pushkin", "Gatchina", "Kolpino"],
        "Novosibirsk Oblast": ["Novosibirsk", "Berdsk", "Iskitim", "Ob"],
        "Sverdlovsk Oblast": ["Yekaterinburg", "Nizhny Tagil", "Kamyshlov", "Pervouralsk"],
        "Krasnodar Krai": ["Krasnodar", "Sochi", "Novorossiysk", "Armavir"],
        "Rostov Oblast": ["Rostov-on-Don", "Taganrog", "Shakhty", "Volgodonsk"],
        "Tatarstan": ["Kazan", "Naberezhnye Chelny", "Nizhnekamsk", "Almetyevsk"]
      }
    },
    China: {
      states: ["Fujian", "Gansu", "Guangdong", "Heilongjiang", "Henan", "Hubei", "Hunan",
        "Jiangsu", "Jilin", "Liaoning", "Shaanxi", "Shandong", "Sichuan", "Yunnan", "Zhejiang"],
      cities: {
        "Guangdong": ["Guangzhou", "Shenzhen", "Foshan", "Dongguan"],
        "Zhejiang": ["Hangzhou", "Ningbo", "Wenzhou", "Shaoxing"],
        "Jiangsu": ["Nanjing", "Suzhou", "Wuxi", "Changzhou"],
        "Shandong": ["Jinan", "Qingdao", "Yantai", "Weihai"],
        "Fujian": ["Fuzhou", "Xiamen", "Quanzhou", "Zhangzhou"],
        "Sichuan": ["Chengdu", "Mianyang", "Nanchong", "Leshan"],
        "Henan": ["Zhengzhou", "Luoyang", "Kaifeng", "Anyang"],
        "Hubei": ["Wuhan", "Yichang", "Xiangyang", "Shiyan"],
        "Hunan": ["Changsha", "Zhuzhou", "Hengyang", "Yueyang"],
        "Liaoning": ["Shenyang", "Dalian", "Anshan", "Fushun"],
        "Jilin": ["Changchun", "Jilin City", "Yanji", "Siping"],
        "Heilongjiang": ["Harbin", "Qiqihar", "Mudanjiang", "Jiamusi"],
        "Shaanxi": ["Xi’an", "Xianyang", "Baoji", "Weinan"],
        "Gansu": ["Lanzhou", "Tianshui", "Baiyin", "Wuwei"],
        "Yunnan": ["Kunming", "Lijiang", "Dali", "Qujing"]
      }
    },
    Kyrgyzstan: {
      states: ["Fujian", "Gansu", "Guangdong", "Heilongjiang", "Henan", "Hubei", "Hunan",
        "Jiangsu", "Jilin", "Liaoning", "Shaanxi", "Shandong", "Sichuan", "Yunnan", "Zhejiang"],
      cities: {
        "Chüy Region": ["Bishkek", "Kant", "Tokmok", "Kara-Balta"],
        "Osh Region": ["Osh", "Uzgen", "Kara-Suu", "Nookat"],
        "Issyk-Kul Region": ["Karakol", "Balykchy", "Cholpon-Ata", "Tamga"],
        "Jalal-Abad Region": ["Jalal-Abad", "Tash-Kumyr", "Suzak", "Kochkor-Ata"],
        "Naryn Region": ["Naryn", "At-Bashy", "Kochkor", "Baetov"],
        "Talas Region": ["Talas", "Manas", "Kara-Buura", "Bakay-Ata"],
        "Batken Region": ["Batken", "Kyzyl-Kiya", "Isfana", "Samarkandek"]
      }
    },
    Bangladesh: {
      states: ["Dhaka Division", "Chittagong Division", "Khulna Division", "Rajshahi Division",
        "Barisal Division", "Sylhet Division", "Rangpur Division", "Mymensingh Division"],
      cities: {
        "Dhaka Division": ["Dhaka", "Narayanganj", "Gazipur", "Tangail"],
        "Chittagong Division": ["Chittagong", "Cox’s Bazar", "Comilla", "Feni"],
        "Khulna Division": ["Khulna", "Jessore", "Satkhira", "Bagerhat"],
        "Rajshahi Division": ["Rajshahi", "Bogura", "Pabna", "Naogaon"],
        "Barisal Division": ["Barisal", "Patuakhali", "Bhola", "Jhalokathi"],
        "Sylhet Division": ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
        "Rangpur Division": ["Rangpur", "Dinajpur", "Thakurgaon", "Kurigram"],
        "Mymensingh Division": ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"]
      }
    },
    Uzbekistan: {
      states: ["Tashkent Region", "Samarkand Region", "Bukhara Region", "Fergana Region",
        "Andijan Region", "Namangan Region", "Surxondaryo Region", "Karakalpakstan"],
      cities: {
        "Tashkent Region": ["Tashkent", "Angren", "Chirchiq", "Bekabad"],
        "Samarkand Region": ["Samarkand", "Urgut", "Kattakurgan", "Jomboy"],
        "Bukhara Region": ["Bukhara", "Gijduvan", "Kogon", "Vobkent"],
        "Fergana Region": ["Fergana", "Kokand", "Margilan", "Rishtan"],
        "Andijan Region": ["Andijan", "Asaka", "Shahrixon", "Xoʻjaobod"],
        "Namangan Region": ["Namangan", "Chust", "Kosonsoy", "Uychi"],
        "Surxondaryo Region": ["Termez", "Denov", "Sherobod", "Angor"],
        "Karakalpakstan": ["Nukus", "Beruni", "Chimbay", "Turtkul"]
      }
    }
  };

  const countryPhoneCodes = {
    India: "+91",
    Russia: "+7",
    China: "+86",
    Kyrgyzstan: "+996",
    Bangladesh: "+880",
    Uzbekistan: "+998",
  };

  const countryKeys = Object.keys(countryData);
  const [selectedCountry, setSelectedCountry] = useState(countryKeys[0]);
  const [phoneCode, setPhoneCode] = useState(countryPhoneCodes[countryKeys[0]]);
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phoneCode: "+91",
    phoneNumber: "",
    field1: "",
    field2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setPhoneCode(countryPhoneCodes[country]);
    setStates(countryData[country].states);
    setSelectedState("");
    setCities([]);
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(state ? countryData[selectedCountry]?.cities[state] || [] : []);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 px-4 md:px-10 lg:px-32 gap-8 py-16 mt-16 md:mt-20">
      <Slide direction="left" duration={1000} triggerOnce className="w-full lg:w-[60%]">
        <div className="px-2 md:px-4 lg:px-12">
          <h2 className="text-4xl font-bold text-blue-900">About Renmin Education</h2>
          <h3 className="text-2xl text-gray-700 mb-6">Who we are</h3>
          <p className="text-gray-600 leading-relaxed">
            Renmin Education is a premier educational consultancy based in India,
            committed to guiding students toward successful admissions in the world’s
            most prestigious universities. With a team of experienced and highly qualified
            counselors, we specialize in providing personalized guidance to students
            aiming for higher education abroad. Our mission is to help students navigate
            the complexities of the international education landscape, ensuring they
            make informed decisions that align with their academic goals and career
            aspirations.
          </p>

          <button
            className="mt-8 bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-[#bf1d1d] transition duration-300"
            onClick={() => navigate('/about')}
          >
            Read More
          </button>
        </div>
      </Slide>

      <div className="w-full lg:w-[40%]">
        <Fade direction="up" delay={1} triggerOnce>
          <div className="bg-[#002B49] text-white p-6 rounded-lg shadow-lg w-full mx-auto">
            <p className="text-lg text-center mt-2">We’d love to learn more about you!</p>
            <form className="mt-4 space-y-3">
              <input type="text" name="name" placeholder="Your Name" className="w-full p-2 rounded bg-white text-black" required />
              <input type="email" name="email" placeholder="Your Email" className="w-full p-2 rounded bg-white text-black" required />

              <select name="country" className="w-full p-2 rounded bg-white text-black" required onChange={handleCountryChange} value={selectedCountry}>
                {countryKeys.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="p-2 rounded bg-white text-black w-1/4 text-center"
                  value={phoneCode}
                  readOnly
                />

                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  className="p-2 rounded bg-white text-black w-3/4"
                  required
                />
              </div>

              <select
                name="state"
                className="w-full p-2 rounded bg-white text-black"
                required
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
              >
                <option value="">Select your state</option>
                {states.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              <select
                name="city"
                className="w-full p-2 rounded bg-white text-black"
                required
                disabled={!selectedState}
              >
                <option value="">Select your city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>

              <button type="submit" className="bg-[#004B87] text-white w-full p-2 rounded">
                SUBMIT NOW
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutUs;
