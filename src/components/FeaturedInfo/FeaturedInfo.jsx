import React, { useState, useEffect } from "react";
import "./featuredInfo.css";

import { ArrowDownward, ArrowUpward, Remove } from "@mui/icons-material";
import { userRequest } from "../../axios";

const FeaturedInfo = () => {

  const [income, setIncome] = useState([])
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('orders/income')
        setIncome(res.data.sort((a, b) => a._id - b._id)) // sorted by id
        setPercentage((res.data[1]?.total * 100) / res.data[0]?.total - 100 || 0) // Compared to last month

      } catch (error) { 
        console.log(error)
      }
    }

    getIncome()

  },[])

  const IconByPercantage = () => {
    if(percentage < 0){
      return <ArrowDownward className="featuredIcon negative" />
    } else if(percentage > 0){
      return <ArrowUpward className="featuredIcon" />
    } else {
      return <Remove className="featuredIcon zero"/>
    }
  }

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${income[1] ? income[1]?.total : 0}</span>
          <span className="featuredMoneyRate">   
            %{Math.floor(percentage)}
            <IconByPercantage />
          </span>
          <div className="featuredLogo">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 xl:w-12 xl:h-12"><circle cx="25" cy="25" r="25" fill="#FDE4E5"></circle><path d="M27.2031 23.6016C28.349 23.9401 29.2083 24.6562 29.7812 25.75C30.3802 26.8438 30.4714 27.9766 30.0547 29.1484C29.7422 30.0078 29.2083 30.6979 28.4531 31.2188C27.6979 31.7135 26.8516 31.974 25.9141 32V33.875C25.9141 34.0573 25.849 34.2005 25.7188 34.3047C25.6146 34.4349 25.4714 34.5 25.2891 34.5H24.0391C23.8568 34.5 23.7005 34.4349 23.5703 34.3047C23.4661 34.2005 23.4141 34.0573 23.4141 33.875V32C22.1641 32 21.0443 31.6094 20.0547 30.8281C19.8984 30.6979 19.8073 30.5417 19.7812 30.3594C19.7552 30.1771 19.8203 30.0208 19.9766 29.8906L21.3047 28.5625C21.5651 28.3281 21.8255 28.3021 22.0859 28.4844C22.4766 28.7448 22.9193 28.875 23.4141 28.875H25.9922C26.3307 28.875 26.6042 28.7708 26.8125 28.5625C27.0469 28.3281 27.1641 28.0417 27.1641 27.7031C27.1641 27.1302 26.8906 26.7656 26.3438 26.6094L22.3203 25.4375C21.4349 25.1771 20.6927 24.7083 20.0938 24.0312C19.4948 23.3542 19.1432 22.5729 19.0391 21.6875C18.9349 20.4115 19.2995 19.3177 20.1328 18.4062C20.9922 17.4688 22.0599 17 23.3359 17H23.4141V15.125C23.4141 14.9427 23.4661 14.7995 23.5703 14.6953C23.7005 14.5651 23.8568 14.5 24.0391 14.5H25.2891C25.4714 14.5 25.6146 14.5651 25.7188 14.6953C25.849 14.7995 25.9141 14.9427 25.9141 15.125V17C27.1641 17 28.2839 17.3906 29.2734 18.1719C29.4297 18.3021 29.5208 18.4583 29.5469 18.6406C29.5729 18.8229 29.5078 18.9792 29.3516 19.1094L28.0234 20.4375C27.763 20.6719 27.5026 20.6979 27.2422 20.5156C26.8516 20.2552 26.4089 20.125 25.9141 20.125H23.3359C22.9974 20.125 22.7109 20.2422 22.4766 20.4766C22.2682 20.6849 22.1641 20.9583 22.1641 21.2969C22.1641 21.5312 22.2422 21.7526 22.3984 21.9609C22.5547 22.1693 22.75 22.3125 22.9844 22.3906L27.2031 23.6016Z" fill="#FB7178"></path></svg>
          </div>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$11,231</span>
          <span className="featuredMoneyRate">
            %-1.5 <ArrowDownward className="featuredIcon negative"/>
          </span>
          <div className="featuredLogo">
          <svg style={{ color : '#716BDE'}} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#EAF1FB"></circle><path d="M28.25 24.5V27H20.75V24.5H28.25ZM31.7266 18.6016C31.9089 18.7839 32 19.0052 32 19.2656V19.5H27V14.5H27.2344C27.4948 14.5 27.7161 14.5911 27.8984 14.7734L31.7266 18.6016ZM25.75 19.8125C25.75 20.0729 25.8411 20.2943 26.0234 20.4766C26.2057 20.6589 26.4271 20.75 26.6875 20.75H32V33.5625C32 33.8229 31.9089 34.0443 31.7266 34.2266C31.5443 34.4089 31.3229 34.5 31.0625 34.5H17.9375C17.6771 34.5 17.4557 34.4089 17.2734 34.2266C17.0911 34.0443 17 33.8229 17 33.5625V15.4375C17 15.1771 17.0911 14.9557 17.2734 14.7734C17.4557 14.5911 17.6771 14.5 17.9375 14.5H25.75V19.8125ZM19.5 17.3125V17.9375C19.5 18.1458 19.6042 18.25 19.8125 18.25H22.9375C23.1458 18.25 23.25 18.1458 23.25 17.9375V17.3125C23.25 17.1042 23.1458 17 22.9375 17H19.8125C19.6042 17 19.5 17.1042 19.5 17.3125ZM19.5 19.8125V20.4375C19.5 20.6458 19.6042 20.75 19.8125 20.75H22.9375C23.1458 20.75 23.25 20.6458 23.25 20.4375V19.8125C23.25 19.6042 23.1458 19.5 22.9375 19.5H19.8125C19.6042 19.5 19.5 19.6042 19.5 19.8125ZM29.5 31.6875V31.0625C29.5 30.8542 29.3958 30.75 29.1875 30.75H26.0625C25.8542 30.75 25.75 30.8542 25.75 31.0625V31.6875C25.75 31.8958 25.8542 32 26.0625 32H29.1875C29.3958 32 29.5 31.8958 29.5 31.6875ZM29.5 23.875C29.5 23.6927 29.4349 23.5495 29.3047 23.4453C29.2005 23.3151 29.0573 23.25 28.875 23.25H20.125C19.9427 23.25 19.7865 23.3151 19.6562 23.4453C19.5521 23.5495 19.5 23.6927 19.5 23.875V27.625C19.5 27.8073 19.5521 27.9635 19.6562 28.0938C19.7865 28.1979 19.9427 28.25 20.125 28.25H28.875C29.0573 28.25 29.2005 28.1979 29.3047 28.0938C29.4349 27.9635 29.5 27.8073 29.5 27.625V23.875Z" fill="currentColor"></path></svg>          </div>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$3,244</span>
          <span className="featuredMoneyRate">
            %+2.4 <ArrowUpward className="featuredIcon" />
          </span>
          <div className="featuredLogo">
          <svg style={{ color : '#716BDE'}} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#EAF1FB"></circle><path d="M26.75 19.8125C26.75 20.0729 26.8411 20.2943 27.0234 20.4766C27.2057 20.6589 27.4271 20.75 27.6875 20.75H33V33.5625C33 33.8229 32.9089 34.0443 32.7266 34.2266C32.5443 34.4089 32.3229 34.5 32.0625 34.5H18.9375C18.6771 34.5 18.4557 34.4089 18.2734 34.2266C18.0911 34.0443 18 33.8229 18 33.5625V15.4375C18 15.1771 18.0911 14.9557 18.2734 14.7734C18.4557 14.5911 18.6771 14.5 18.9375 14.5H26.75V19.8125ZM33 19.2656V19.5H28V14.5H28.2344C28.4948 14.5 28.7161 14.5911 28.8984 14.7734L32.7266 18.6016C32.9089 18.7839 33 19.0052 33 19.2656Z" fill="currentColor"></path></svg>          </div>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
