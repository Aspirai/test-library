import requests

import csv

f = open("info.csv", "a", encoding="utf-8", newline="")
csv_writer = csv.DictWriter(
    f,
    fieldnames=[
        "城市",
        "区域",
        "职位",
        "标签",
        "学历",
        "经验",
        "薪资",
        "公司",
        "公司规模",
    ],
)

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Connection": "keep-alive",
    "Content-Length": "508",
    "Content-Type": "application/json;charset=UTF-8",
    "Cookie": "__gc_id=875435ff37924b958848efbeb545616d; __uuid=1739581794636.55; need_bind_tel=false; c_flag=675ff5d170cddd7e074fb7eb8f19cd15; XSRF-TOKEN=KCa_Cw6BS96tQkBOJVnGBA; hpo_role-sec_project=sec_project_liepin; hpo_sec_tenant=0; b-u-category=1; UniqueKey=119e92cc1196b2d26bc56763ae71c6f2; liepin_login_valid=0; lt_auth=7u5ePCcBy1Wv4HPf3GUNsaYbiNP6Vj3N93wEh0gC0NK9WPbh4P%2FqQwOGrrYE%2BCoIqx50Ia0zMLf9PO%2F4z3JM6EAQ%2F1GnlpmuvP%2B9z30DUeZkHuyflMXuqsjQQ5kjrXo6ykpgn2siwUnO; user_roles=0; user_photo=5f8fa3a6f6d1ab58476f322808u.png; new_user=false; inited_user=c1fc4eba13b53a465f99b6a21fceb68b; user_name=%E7%A8%8B%E9%95%9C%E9%80%9A; acw_tc=2760829a17397662026025987eea407a08c10061d5a1ec37593876105a1c95; __tlog=1739766063872.00%7C00000000%7C00000000%7Cs_o_009%7Cs_o_009; imId=98623462a512c3254389a83f496474cc; imId_0=98623462a512c3254389a83f496474cc; imClientId=98623462a512c32519562c969cd3707c; imClientId_0=98623462a512c32519562c969cd3707c; imApp_0=1; fe_im_socketSequence_new_0=1_1_1; fe_im_opened_pages=; fe_im_connectJson_0=%7B%220_119e92cc1196b2d26bc56763ae71c6f2%22%3A%7B%22socketConnect%22%3A%222%22%2C%22connectDomain%22%3A%22liepin.com%22%7D%7D; __session_seq=15; __tlg_event_seq=38",
    "Host": "api-c.liepin.com",
    "Origin": "https://c.liepin.com",
    "Referer": "https://c.liepin.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    "X-Client-Type": "web",
    "X-Fscp-Bi-Stat": '{"location": "https://c.liepin.com/?time=1739766208855"}',
    "X-Fscp-Fe-Version": "",
    "X-Fscp-Std-Info": '{"client_id": "40106"}',
    "X-Fscp-Trace-Id": "67411dff-d1e9-4dc2-a5f6-830edf1bdccb",
    "X-Fscp-Version": "1.1",
    "X-Requested-With": "XMLHttpRequest",
    "X-XSRF-TOKEN": "KCa_Cw6BS96tQkBOJVnGBA",
    "sec-ch-ua": '"Not=A?Brand";v="99", "Chromium";v="118"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
}

url = "https://api-c.liepin.com/api/com.liepin.csearch.h5.get-homepage-recommend"

data = {
    "data": {
        "operateKind": "LOGIN",
        "sortType": "PC_HP_MIX",
        "selectedExpect": '{"expectId":200115889956,"expectMonthSalaryUpper":11000,"expectMonthSalaryLower":10000,"expectSalmonths":12,"expectIndustry":"000","expectIndustryName":"全部行业","expectJobtitleName":"WEB前端开发","expectDqName":"杭州","expectOriginDq":"070020","modifytime":"1739583002000","expectJobtitle":"N000033","expectDq":"070020","tabTitle":"WEB前端开发"}',
        "existFallbackResult": "false",
    }
}

for i in range(10):
    try:
        response = requests.post(url, json=data, headers=headers)

        response_json = response.json()

        need_data = response_json["data"]["data"]

        for i in need_data:
            city_info = i["job"]["dq"].split("-")
            if len(city_info) == 2:
                city = city_info[0]
                area = city_info[1]
            else:
                city = city_info[0]
                area = "未知"

            dit = {
                "城市": city,
                "区域": area,
                "职位": i["job"]["jobtitleName"],
                "标签": i["job"]["title"],
                "学历": i["job"]["requireEduLevel"],
                "经验": i["job"]["requireWorkYears"],
                "薪资": i["job"]["salary"],
                "公司": i["comp"]["fullCompanyName"],
                "公司规模": i["comp"]["compScale"],
            }
            csv_writer.writerow(dit)
            print(dit)
            # break
    except:
        pass
f.close()
