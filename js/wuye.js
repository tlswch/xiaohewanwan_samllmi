var rule = {
    title: '午夜影视',
    host: 'http://rxwuye.com',
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    homeUrl: '',
    searchUrl: '/index.php/ajax/suggest?mid=1&wd=**',
    searchable: 2,
    quickSearch: 0,
    headers:{'User-Agent':'Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36'},
    // 分类链接fypage参数支持1个()表达式
    // url: '/index.php/api/vod#type=fyclass&page=fypage',
	url: '/index.php/api/vod#type=fyfilter&page=fypage',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {"1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"6"},{"n":"喜剧片","v":"7"},{"n":"爱情片","v":"8"},{"n":"科幻片","v":"9"},{"n":"恐怖片","v":"10"},{"n":"剧情片","v":"11"},{"n":"战争片","v":"12"},{"n":"记录片","v":"13"},{"n":"动画","v":"14"},{"n":"1080电影","v":"46"},{"n":"其他片","v":"36"}]}],"2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"港剧","v":"14"},{"n":"欧美剧","v":"16"},{"n":"日韩剧","v":"15"},{"n":"高清剧","v":"50"}]}]},
    filter_def:{
		20:{cateId:'1'},
		37:{cateId:'2'}
	},
    detailUrl:'/index.php/vod/detail/id/fyid.html',
    图片来源:'@Referer=http://rxwuye.com/',
    推荐:'.list-vod.flex .public-list-box;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
    一级:'',
    一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=urljoin2(input.split("/i")[0],it.vod_pic);return it});',
    //一级:'js:let body=input.split("#")[1];let t=Math.round(new Date/1e3).toString();let key=md5("DS"+t+"DCC147D11943AF75");let url=input.split("#")[0];body=body+"&time="+t+"&key="+key;print(body);fetch_params.body=body;let html=post(url,fetch_params);let data=JSON.parse(html);VODS=data.list.map(function(it){it.vod_pic=it.vod_pic.replace("mac:","https:");return it});',
    二级:{
		"title":".slide-info-title&&Text;.slide-info:eq(3)--strong&&Text",
		"img":".lazy&&data-original",
		"desc":".fraction&&Text;.slide-info-remarks:eq(1)&&Text;.slide-info-remarks:eq(2)&&Text;.slide-info:eq(2)--strong&&Text;.slide-info:eq(1)--strong&&Text",
		"content":"#height_limit&&Text",
		"tabs":".anthology.wow.fadeInUp.animated&&.swiper-wrapper&&a",
		"tab_text":".swiper-slide&&Text",
		"lists":".anthology-list-box:eq(#id)&&.anthology-list-play&&li"
	},
    搜索:'json:list;name;pic;;id',
}