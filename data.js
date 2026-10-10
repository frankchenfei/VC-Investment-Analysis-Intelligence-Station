(function () {
  const sectors = [
    { id: 'ai', name: '人工智能', color: '#6366f1' },
    { id: 'robot', name: '具身智能', color: '#f59e0b' },
    { id: 'chip', name: '半导体', color: '#0ea5e9' },
    { id: 'energy', name: '新能源', color: '#10b981' },
    { id: 'bio', name: '生物医药', color: '#ec4899' },
    { id: 'saas', name: '企业服务', color: '#8b5cf6' },
    { id: 'mf', name: '先进制造', color: '#f97316' },
    { id: 'consumer', name: '消费零售', color: '#ef4444' }
  ];

  const OFFICIAL_SITES = {
    'inst-hl': 'https://www.hillhousecap.com',
    'inst-hs': 'https://www.hongshan.com.cn',
    'inst-idg': 'https://www.idgcapital.com',
    'inst-yc': 'https://www.sourcecodecap.com',
    'inst-qm': 'https://www.qimingvc.com',
    'inst-zg': 'https://www.zhenfund.com',
    'inst-qj': 'https://www.miracleplus.com',
    'inst-xx': 'https://www.linear.vc',
    'inst-yq': 'https://www.yunqipartners.com',
    'inst-lx': 'https://www.lenovocapital.com',
    'inst-tencent': 'https://www.tencent.com',
    'inst-ali': 'https://www.alibabagroup.com',
    'inst-mi': 'https://www.mi.com',
    'inst-byd': 'https://www.byd.com',
    'inst-cicc': 'https://www.cicc.com',
    'inst-szc': 'https://www.szvc.com.cn',
    'inst-tongc': 'https://www.cowinvc.com',
    'inst-gaorong': 'https://www.gaorong.vc',
    'inst-sbvv': 'https://www.visionfund.com',
    'inst-temasek': 'https://www.temasek.com.sg',
    'inst-tiger': 'https://www.tigerglobal.com',
    'inst-plum': 'https://www.plumventures.cn',
    'inst-legend': 'https://www.legendcapital.com.cn',
    'inst-k2': 'https://www.k2vc.com',
    'inst-gsr': 'https://www.gsrventures.com',
    'inst-nl': 'https://www.nlightvc.com',
    'inst-sinovation': 'https://www.sinovationventures.com',
    'inst-gaocheng': 'https://www.gaochengcap.com',
    'inst-lightspeed': 'https://www.lightspeedchina.com',
    'inst-shunwei': 'https://www.shunwei.com',
    'inst-5y': 'https://www.5ycap.com',
    'inst-ggv': 'https://www.ggvcap.com',
    'inst-joy': 'https://www.joycapital.com',
    'inst-casstar': 'https://www.casstar.com.cn',
    'inst-inno': 'https://www.innoangel.com.cn',
    'inst-frees': 'https://www.freesvc.com',
    'co-zhipu': 'https://www.zhipuai.cn',
    'co-moonshot': 'https://www.moonshot.cn',
    'co-minimax': 'https://www.minimax.io',
    'co-baichuan': 'https://www.baichuan-ai.com',
    'co-01ai': 'https://www.01.ai',
    'co-stepfun': 'https://www.stepfun.com',
    'co-infinigence': 'https://www.infinigence.ai',
    'co-unitree': 'https://www.unitree.com',
    'co-agibot': 'https://www.zhiyuan-robot.com',
    'co-galaxy': 'https://www.galbot.com',
    'co-limxd': 'https://www.limxdynamics.com',
    'co-cloudwood': 'https://www.deeprobotics.cn',
    'co-biren': 'https://www.birentech.com',
    'co-muxi': 'https://www.metax-tech.com',
    'co-moore': 'https://www.moorethreads.cn',
    'co-suan': 'https://www.enflame-tech.com',
    'co-tianshu': 'https://www.iluvatar.com',
    'co-hanbo': 'https://www.vastaitech.com',
    'co-weilan': 'https://www.welion.com.cn',
    'co-yidao': 'https://www.yidaosolar.com',
    'co-yingeng': 'https://www.dualitybiologics.com',
    'co-xiansheng': 'https://www.simcere.com',
    'co-pufang': 'https://www.profoundbio.com',
    'co-sensors': 'https://www.sensorsdata.cn',
    'co-minglue': 'https://www.mininglamp.com',
    'co-fenbeitong': 'https://www.fenbeitong.com',
    'co-bawang': 'https://www.bawangchaji.com',
    'co-cotti': 'https://www.cotti.com',
    'co-mixue': 'https://www.mixue.com',
    'co-shengshu': 'https://www.shengshu-ai.com',
    'co-modelbest': 'https://www.modelbest.cn',
    'co-deeplang': 'https://www.deeplang.ai',
    'co-silicon': 'https://www.siliconflow.cn',
    'co-fourier': 'https://www.fftai.com',
    'co-dreame': 'https://www.dreame.tech',
    'co-leju': 'https://www.lejurobot.com',
    'co-ubtech': 'https://www.ubtrobot.com',
    'co-bst': 'https://www.blacksesame.com.cn',
    'co-xepic': 'https://www.xepic.com',
    'co-svolt': 'https://www.svolt.cn',
    'co-aesc': 'https://www.aesc-group.com',
    'co-keymed': 'https://www.keymedbio.com',
    'co-jacobio': 'https://www.jacobio.com',
    'co-neocrm': 'https://www.xiaoshouyi.com',
    'co-fxiaoke': 'https://www.fxiaoke.com',
    'co-dobot': 'https://www.dobot.cc',
    'co-chapanda': 'https://www.chabaidao.com',
    'co-heytea': 'https://www.heytea.com'
  };
  function siteFor(id, name) {
    return OFFICIAL_SITES[id] || 'https://www.bing.com/search?q=' + encodeURIComponent(name + ' 官网');
  }

  const institutions = [
    ['inst-hl', '高瓴创投', '头部VC', '北京', 2000, ['ai', 'robot', 'energy', 'bio', 'consumer'], 9, '聚焦科技、医疗与消费的长期成长投资'],
    ['inst-hs', '红杉中国', '头部VC', '北京', 3000, ['ai', 'robot', 'chip', 'energy', 'saas', 'consumer'], 10, '全周期投资，覆盖种子到成长期'],
    ['inst-idg', 'IDG资本', '头部VC', '北京', 1200, ['ai', 'robot', 'chip', 'saas'], 9, '科技与早期创业生态的长期建设者'],
    ['inst-jw', '经纬创投', '头部VC', '上海', 800, ['ai', 'robot', 'saas'], 8, '聚焦互联网、科技与企业服务的早期基金'],
    ['inst-yc', '源码资本', '头部VC', '北京', 600, ['ai', 'robot', 'saas'], 8, '专注数据智能与硬科技的成长基金'],
    ['inst-qm', '启明创投', '头部VC', '上海', 500, ['ai', 'bio', 'robot'], 7, '深耕信息技术与健康医疗的双币基金'],
    ['inst-zg', '真格基金', '天使基金', '北京', 120, ['ai', 'robot', 'saas'], 6, '专注早期创业投资的天使基金'],
    ['inst-qj', '奇绩创坛', '天使基金', '北京', 60, ['ai', 'robot'], 5, '专注早期硬科技创业与加速'],
    ['inst-lc', '蓝驰创投', '美元基金', '北京', 300, ['robot', 'chip', 'ai'], 7, '关注前沿科技与机器人产业'],
    ['inst-hd', '红点中国', '美元基金', '上海', 280, ['chip', 'robot'], 7, '技术驱动型投资，覆盖半导体与智能硬件'],
    ['inst-xx', '线性资本', '天使基金', '上海', 90, ['saas', 'ai'], 5, '聚焦数据智能与软件创新'],
    ['inst-yq', '云启资本', '头部VC', '上海', 220, ['mf', 'ai'], 6, '投资先进制造与智能技术'],
    ['inst-lx', '联想创投', '产业资本', '北京', 400, ['ai', 'chip', 'robot'], 8, '联想集团的科技产业基金'],
    ['inst-tencent', '腾讯投资', '产业资本', '深圳', 2500, ['ai', 'saas'], 9, '腾讯生态战略投资'],
    ['inst-ali', '阿里巴巴战投', '产业资本', '杭州', 1800, ['ai', 'consumer'], 9, '阿里生态与消费科技投资'],
    ['inst-mi', '小米战投', '产业资本', '北京', 600, ['robot', 'chip', 'ai'], 7, '小米生态链与硬科技投资'],
    ['inst-byd', '比亚迪投资', '产业资本', '深圳', 500, ['robot', 'energy'], 7, '新能源与智能制造的产业资本'],
    ['inst-cicc', '中金资本', 'PE机构', '北京', 1500, ['chip', 'ai', 'energy', 'bio', 'mf', 'consumer'], 9, '全资产类别私募股权投资平台'],
    ['inst-gtct', '国投创合', '政府引导基金', '北京', 900, ['chip', 'bio', 'mf'], 8, '国家级产业投资基金'],
    ['inst-shsc', '上海科创基金', '政府引导基金', '上海', 800, ['chip', 'ai', 'mf'], 8, '上海科创中心建设股权投资基金'],
    ['inst-hfct', '合肥产投', '政府引导基金', '合肥', 700, ['energy', 'chip', 'robot'], 7, '合肥战新产业投资平台'],
    ['inst-szc', '深创投', 'PE机构', '深圳', 1000, ['chip', 'energy', 'robot', 'mf'], 8, '综合性创业投资集团'],
    ['inst-yuany', '元禾原点', '政府引导基金', '苏州', 300, ['chip', 'ai'], 6, '苏州本地早期科技基金'],
    ['inst-tongc', '同创伟业', 'PE机构', '深圳', 200, ['mf', 'bio'], 6, '成长期股权投资机构'],
    ['inst-gaorong', '高榕创投', '头部VC', '上海', 400, ['ai', 'consumer', 'saas'], 7, '专注新经济与科技的VC基金'],
    ['inst-sbvv', '软银愿景', '海外基金', '香港', 8000, ['ai', 'chip', 'robot'], 9, '全球科技成长基金'],
    ['inst-temasek', '淡马锡', '海外基金', '新加坡', 4000, ['energy', 'consumer', 'bio'], 8, '新加坡主权财富基金'],
    ['inst-tiger', '老虎环球', '海外基金', '香港', 2000, ['ai', 'consumer'], 8, '全球科技与消费成长基金'],
    ['inst-plum', '梅花创投', '天使基金', '北京', 150, ['ai', 'consumer', 'saas'], 7, '早期科技与消费投资'],
    ['inst-legend', '君联资本', 'PE机构', '北京', 1000, ['chip', 'bio', 'ai'], 8, '科创与医疗健康投资'],
    ['inst-cgc', '华映资本', '头部VC', '上海', 300, ['ai', 'consumer', 'saas'], 7, '早期与成长期风险投资'],
    ['inst-k2', '险峰长青', '天使基金', '北京', 100, ['ai', 'robot', 'saas'], 6, '消费与科技早期投资'],
    ['inst-gsr', '金沙江创投', '美元基金', '北京', 350, ['ai', 'chip', 'robot'], 7, 'AI与硬科技早期投资'],
    ['inst-nl', '北极光创投', '美元基金', '北京', 280, ['ai', 'bio', 'chip'], 7, '深科技与半导体投资'],
    ['inst-sinovation', '创新工场', '头部VC', '北京', 250, ['ai', 'robot', 'saas'], 7, '人工智能与企业服务投资'],
    ['inst-gaocheng', '高成资本', '头部VC', '北京', 200, ['saas', 'ai'], 6, '企业软件与AI投资'],
    ['inst-lightspeed', '光速中国', '美元基金', '上海', 320, ['ai', 'robot', 'consumer'], 7, '科技消费与机器人投资'],
    ['inst-shunwei', '顺为资本', '头部VC', '北京', 500, ['ai', 'robot', 'consumer'], 7, '科技与消费成长基金'],
    ['inst-5y', '五源资本', '头部VC', '上海', 450, ['ai', 'chip', 'saas'], 7, 'AI与互联网早期基金'],
    ['inst-ggv', '纪源资本', '美元基金', '上海', 600, ['ai', 'consumer', 'saas'], 8, '科技与消费成长基金'],
    ['inst-joy', '愉悦资本', '头部VC', '北京', 220, ['consumer', 'energy', 'ai'], 6, '消费品牌成长投资'],
    ['inst-casstar', '中科创星', '政府引导基金', '西安', 400, ['chip', 'robot', 'mf'], 7, '前沿科技产业化投资'],
    ['inst-inno', '英诺天使', '天使基金', '北京', 80, ['ai', 'robot', 'mf'], 5, '硬科技早期孵化与投资'],
    ['inst-frees', '峰瑞资本', '头部VC', '北京', 180, ['ai', 'bio', 'consumer'], 6, '科技与医疗早期投资'],
    ['inst-blackant', '黑蚁资本', '头部VC', '上海', 200, ['consumer'], 6, '消费品牌成长投资'],
    ['inst-challenger', '挑战者创投', '产业资本', '北京', 120, ['consumer', 'saas'], 5, '新消费与互联网投资'],
    ['inst-off', '东方富海', 'PE机构', '深圳', 300, ['mf', 'energy', 'bio'], 6, '先进制造与新能源投资'],
    ['inst-fortune', '达晨财智', 'PE机构', '深圳', 350, ['mf', 'chip', 'ai'], 7, '智能制造与科技投资']
  ].map(function (r) {
    return { id: r[0], name: r[1], type: r[2], region: r[3], aum: null, focus: [], scale: null, desc: '', website: siteFor(r[0], r[1]), verified: false };
  });

  const companies = [
    ['co-zhipu', '智谱AI', 'ai', '北京', 2019, 'B+轮', 320, 1800, ['大模型', '行业智能'], '国产大模型头部厂商，政务与金融场景规模化落地'],
    ['co-moonshot', '月之暗面', 'ai', '北京', 2023, 'B轮', 280, 900, ['大模型', 'C端应用'], 'Kimi智能助手背后的模型公司'],
    ['co-minimax', 'MiniMax', 'ai', '上海', 2021, 'C轮', 260, 1100, ['大模型', '多模态'], '多模态大模型与AI陪伴产品公司'],
    ['co-baichuan', '百川智能', 'ai', '北京', 2023, 'A+轮', 150, 700, ['大模型', '医疗AI'], '通用与医疗大模型创业公司'],
    ['co-01ai', '零一万物', 'ai', '北京', 2023, 'B轮', 180, 650, ['大模型', 'AI Infra'], '李开复创立的AI大模型公司'],
    ['co-stepfun', '阶跃星辰', 'ai', '上海', 2023, 'A+轮', 160, 600, ['大模型', 'Agent'], '多模态与Agent方向的大模型公司'],
    ['co-infinigence', '无问芯穹', 'ai', '上海', 2023, 'A轮', 90, 400, ['AI Infra', '算力'], 'AI算力基础设施公司'],
    ['co-luchen', '潞晨科技', 'ai', '北京', 2021, 'B轮', 70, 350, ['大模型', '分布式训练'], '大模型训练推理系统公司'],
    ['co-unitree', '宇树科技', 'robot', '杭州', 2016, 'C轮', 260, 900, ['人形机器人', '四足'], '四足与人形机器人整机公司'],
    ['co-agibot', '智元机器人', 'robot', '上海', 2023, 'C轮', 240, 1500, ['人形机器人', '具身智能'], '稚晖君创立的通用机器人公司'],
    ['co-galaxy', '银河通用', 'robot', '北京', 2023, 'B+轮', 180, 800, ['人形机器人', '大模型'], '通用具身智能机器人公司'],
    ['co-starnova', '星动纪元', 'robot', '北京', 2023, 'A+轮', 60, 300, ['人形机器人'], '清华系人形机器人公司'],
    ['co-limxd', '逐际动力', 'robot', '深圳', 2022, 'B轮', 80, 420, ['人形机器人', '足式'], '足式与通用机器人公司'],
    ['co-pacinn', '帕西尼感知', 'robot', '深圳', 2021, 'A轮', 45, 260, ['触觉传感', '机器人'], '多维触觉传感与人形机器人公司'],
    ['co-cloudwood', '云深处科技', 'robot', '杭州', 2017, 'B轮', 55, 320, ['四足机器人', '巡检'], '四足机器人整机与行业方案公司'],
    ['co-autozi', '自变量机器人', 'robot', '深圳', 2023, 'A+轮', 35, 180, ['具身智能', '机器人大模型'], '具身智能通用模型公司'],
    ['co-biren', '壁仞科技', 'chip', '上海', 2019, 'D轮', 420, 1200, ['GPU', '算力'], '国产高性能GPU与AI算力公司'],
    ['co-muxi', '沐曦集成电路', 'chip', '上海', 2020, 'D轮', 360, 1000, ['GPU', 'AI芯片'], '全栈GPU芯片设计公司'],
    ['co-moore', '摩尔线程', 'chip', '北京', 2020, 'D轮', 300, 1100, ['GPU', '国产化'], '国产全功能GPU公司'],
    ['co-suan', '燧原科技', 'chip', '上海', 2018, 'C+轮', 200, 800, ['AI芯片', '算力'], '云端AI训练与推理芯片公司'],
    ['co-sic', '芯驰科技', 'chip', '南京', 2018, 'C轮', 130, 700, ['车规芯片', '座舱'], '智能汽车座舱与网关芯片公司'],
    ['co-tianshu', '天数智芯', 'chip', '上海', 2018, 'C轮', 140, 650, ['GPGPU', 'AI算力'], '通用GPU云端训练芯片公司'],
    ['co-hanbo', '瀚博半导体', 'chip', '上海', 2018, 'C+轮', 150, 600, ['AI芯片', '视频'], 'AI视觉与视频处理芯片公司'],
    ['co-tailan', '太蓝新能源', 'energy', '重庆', 2018, 'C轮', 220, 900, ['固态电池'], '半固态与全固态电池公司'],
    ['co-weilan', '卫蓝新能源', 'energy', '北京', 2016, 'C+轮', 180, 1100, ['固态电池', '储能'], '固态电池技术公司'],
    ['co-ronghe', '融和元储', 'energy', '上海', 2021, 'B轮', 60, 300, ['储能系统'], '工商业储能系统公司'],
    ['co-yidao', '一道新能', 'energy', '衢州', 2018, 'Pre-IPO', 280, 800, ['光伏组件', 'N型'], '高效光伏组件制造公司'],
    ['co-zhongrun', '中润光能', 'energy', '徐州', 2018, 'D轮', 140, 900, ['光伏电池'], '光伏电池片生产商'],
    ['co-xinnuo', '信诺维', 'bio', '苏州', 2017, 'C轮', 90, 350, ['创新药', 'ADC'], '肿瘤与自身免疫创新药公司'],
    ['co-yimeng', '宜明昂科', 'bio', '上海', 2015, 'Pre-IPO', 120, 400, ['创新药', '双抗'], '肿瘤免疫双抗药物公司'],
    ['co-yingeng', '映恩生物', 'bio', '上海', 2018, 'D轮', 140, 500, ['ADC', '创新药'], 'ADC药物研发公司'],
    ['co-xiansheng', '先声再明', 'bio', '南京', 2020, 'B轮', 70, 300, ['创新药', '肿瘤'], '先声药业创新药平台'],
    ['co-pufang', '普方生物', 'bio', '苏州', 2018, 'C轮', 80, 280, ['ADC', '创新药'], 'ADC新药研发公司'],
    ['co-sensors', '神策数据', 'saas', '北京', 2015, 'D+轮', 55, 800, ['数据分析', '营销科技'], '客户数据与分析平台'],
    ['co-minglue', '明略科技', 'saas', '北京', 2014, 'E轮', 90, 1600, ['知识图谱', '企业服务'], '企业级AI与知识图谱服务商'],
    ['co-lanma', '澜码科技', 'saas', '上海', 2022, 'A+轮', 25, 150, ['Agent', 'RPA'], '大模型驱动的流程自动化公司'],
    ['co-shizai', '实在智能', 'saas', '杭州', 2018, 'B轮', 40, 500, ['RPA', '智能体'], '智能体与RPA产品公司'],
    ['co-fenbeitong', '分贝通', 'saas', '北京', 2016, 'C+轮', 50, 600, ['费控', 'SaaS'], '企业费用管理SaaS平台'],
    ['co-sitan', '思坦科技', 'mf', '深圳', 2018, 'C轮', 80, 400, ['Micro-LED', '显示'], 'Micro-LED显示技术公司'],
    ['co-huazhuo', '华卓精科', 'mf', '北京', 2012, 'D轮', 180, 800, ['光刻机', '精密制造'], '半导体光刻机核心部件公司'],
    ['co-lingming', '灵明光子', 'mf', '深圳', 2018, 'B+轮', 45, 250, ['SPAD', '激光雷达'], '单光子探测器芯片公司'],
    ['co-atum', '阿童木机器人', 'mf', '天津', 2013, 'C轮', 35, 300, ['工业机器人', '并联'], '高速并联工业机器人公司'],
    ['co-bawang', '霸王茶姬', 'consumer', '成都', 2017, 'Pre-IPO', 600, 4000, ['新茶饮', '出海'], '原叶鲜奶茶连锁品牌'],
    ['co-cotti', '库迪咖啡', 'consumer', '上海', 2022, 'B轮', 120, 8000, ['咖啡连锁'], '平价咖啡连锁品牌'],
    ['co-lingshi', '零食很忙', 'consumer', '长沙', 2019, 'C轮', 180, 6000, ['零食量贩'], '量贩零食连锁品牌'],
    ['co-mixue', '蜜雪冰城', 'consumer', '郑州', 1997, '战略轮', 500, 30000, ['茶饮连锁', '供应链'], '万店茶饮供应链公司'],
    ['co-shengshu', '生数科技', 'ai', '北京', 2023, 'A+轮', 90, 300, ['多模态', '视频生成'], '多模态视频生成模型公司'],
    ['co-modelbest', '面壁智能', 'ai', '北京', 2022, 'A轮', 40, 200, ['端侧大模型'], '端侧大模型公司'],
    ['co-deeplang', '深言科技', 'ai', '北京', 2022, 'A轮', 25, 120, ['AI写作'], 'AI写作与文本生成公司'],
    ['co-silicon', '硅基流动', 'ai', '北京', 2023, 'A轮', 45, 150, ['AI Infra', '推理'], 'AI推理与模型服务基础设施'],
    ['co-fourier', '傅利叶智能', 'robot', '上海', 2015, 'D轮', 120, 800, ['康复机器人', '人形'], '康复与人形机器人公司'],
    ['co-dreame', '追觅科技', 'robot', '苏州', 2017, 'C轮', 150, 4000, ['扫地机器人', '人形'], '智能清洁与家庭服务机器人公司'],
    ['co-leju', '乐聚机器人', 'robot', '深圳', 2016, 'B+轮', 50, 300, ['人形机器人'], '人形机器人整机公司'],
    ['co-ubtech', '优必选', 'robot', '深圳', 2012, '战略轮', 600, 3000, ['人形机器人'], '人形机器人与智能服务机器人公司'],
    ['co-bst', '黑芝麻智能', 'chip', '武汉', 2016, 'C轮', 180, 800, ['车规芯片', '自动驾驶'], '车规级自动驾驶芯片公司'],
    ['co-siengine', '芯擎科技', 'chip', '武汉', 2018, 'B轮', 60, 300, ['车规SoC'], '智能座舱与自动驾驶SoC公司'],
    ['co-xepic', '芯华章', 'chip', '南京', 2020, 'C轮', 70, 400, ['EDA'], '数字验证EDA工具公司'],
    ['co-svolt', '蜂巢能源', 'energy', '常州', 2018, 'Pre-IPO', 400, 10000, ['动力电池'], '动力电池与储能电芯公司'],
    ['co-aesc', '远景动力', 'energy', '上海', 2019, '战略轮', 600, 9000, ['动力电池', '储能'], '动力电池研发与制造公司'],
    ['co-keymed', '康诺亚', 'bio', '成都', 2016, 'Pre-IPO', 150, 600, ['创新药', '肿瘤'], '肿瘤免疫创新药公司'],
    ['co-jacobio', '加科思', 'bio', '北京', 2015, 'C轮', 80, 300, ['小分子创新药'], '小分子创新药公司'],
    ['co-neocrm', '销售易', 'saas', '北京', 2011, 'D轮', 60, 1000, ['CRM'], '企业级CRM平台'],
    ['co-fxiaoke', '纷享销客', 'saas', '北京', 2011, 'F轮', 70, 1200, ['CRM'], '协同与连接型CRM SaaS'],
    ['co-dobot', '越疆科技', 'mf', '深圳', 2015, 'C轮', 90, 600, ['协作机器人'], '协作机器人公司'],
    ['co-chapanda', '茶百道', 'consumer', '成都', 2008, '战略轮', 120, 7000, ['新茶饮'], '新茶饮连锁品牌'],
    ['co-heytea', '喜茶', 'consumer', '深圳', 2012, '战略轮', 200, 5000, ['新茶饮'], '现制茶饮连锁品牌']
  ].map(function (r) {
    return { id: r[0], name: r[1], sector: r[2], region: r[3], founded: r[4], stage: null, estValuation: null, employees: null, tags: [], desc: '', website: siteFor(r[0], r[1]), verified: false };
  });

  // Unverified synthetic transactions were removed. Published deals are intentionally empty.
  const dealRows = [];

  const USD_DEALS = new Set([406, 407, 505, 913, 920]);

  const deals = dealRows.map(function (r) {
    const co = companies.find(function (c) { return c.id === r[1]; });
    return {
      id: r[0],
      company: r[1],
      companyName: co ? co.name : r[1],
      sector: co ? co.sector : 'ai',
      region: co ? co.region : '北京',
      date: r[2],
      round: r[3],
      amount: r[4],
      lead: r[5],
      co: r[6],
      note: r[7],
      cross: !!(r[8] && r[8].cross),
      usd: USD_DEALS.has(r[0])
    };
  });
  // Professional mode: all historical rows above are unverified demo/synthetic data.
  // Keep them only as an internal sample archive; publish none of them.
  deals.length = 0;

  const flows = {
    monthly: [
      ['2025-09', 480], ['2025-10', 560], ['2025-11', 390], ['2025-12', 460],
      ['2026-01', 720], ['2026-02', 580], ['2026-03', 640], ['2026-04', 700],
      ['2026-05', 820], ['2026-06', 760], ['2026-07', 690], ['2026-08', 1320], ['2026-09', 1160], ['2026-10', 620]
    ],
    quarterly: {
      labels: ['2025Q3', '2025Q4', '2026Q1', '2026Q2', '2026Q3*', '2026Q4*'],
      inbound: [480, 560, 720, 650, 880, 450],
      outbound: [310, 380, 460, 520, 600, 320]
    },
    outboundRegions: [
      ['美国', 42, '#6366f1'], ['东南亚', 24, '#10b981'], ['中东', 16, '#f59e0b'], ['欧洲', 12, '#0ea5e9'], ['拉美', 6, '#ec4899']
    ],
    fundraising: {
      labels: ['2025Q3', '2025Q4', '2026Q1', '2026Q2', '2026Q3*', '2026Q4*'],
      values: [380, 420, 560, 610, 800, 420]
    },
    exits: {
      labels: ['2025Q3', '2025Q4', '2026Q1', '2026Q2', '2026Q3*', '2026Q4*'],
      ipos: [24, 31, 38, 35, 62, 22],
      ma: [9, 12, 15, 13, 30, 10]
    },
    valuationTrend: [
      ['种子', 3], ['天使', 8], ['A轮', 22], ['B轮', 45], ['C轮', 80], ['D轮', 130], ['Pre-IPO', 260]
    ],
    currencyMix: [
      ['人民币', 76, '#0d9f6e'], ['美元', 24, '#2563eb']
    ],
    regionalFlow: [
      ['北京', '上海', 42], ['北京', '深圳', 36], ['上海', '杭州', 28], ['深圳', '北京', 24],
      ['杭州', '上海', 18], ['北京', '合肥', 15], ['上海', '苏州', 14], ['合肥', '北京', 12],
      ['成都', '上海', 10], ['北京', '香港', 9]
    ]
  };

  // Unverified synthetic signals were removed. Published signals are intentionally empty.
  const signals = [];

  const rules = [
    { id: 'r1', name: '头部机构密集出手', desc: '任一机构近30天出手不少于3笔', enabled: true, level: 'high' },
    { id: 'r2', name: '赛道动量突增', desc: '任一赛道近30天融资额环比增长不低于50%', enabled: true, level: 'high' },
    { id: 'r3', name: '轮次上移', desc: '头部公司进入D轮及以上交割', enabled: true, level: 'medium' },
    { id: 'r4', name: '北向资金趋势', desc: '北向资金连续3个月净流入超700亿元', enabled: true, level: 'medium' },
    { id: 'r5', name: '估值异动', desc: 'A轮估值中位数环比变化超过100%', enabled: false, level: 'low' },
    { id: 'r6', name: '跨境资本回流', desc: '海外基金参与交易占比连续两季度回升', enabled: true, level: 'low' },
    { id: 'r7', name: '引导基金参与度', desc: '政府引导基金参与大额交易占比超过40%', enabled: false, level: 'low' },
    { id: 'r8', name: '行业融资集中度', desc: '单赛道融资占比超过全市场35%', enabled: true, level: 'medium' }
  ];

  const meta = {
    name: '资本流径',
    asOf: '2026-10-10 09:30',
    dataMode: 'verified-only',
    verifiedCount: 0,
    unverifiedCount: 0,
    lastVerifiedAt: null,
    notice: '未核验数据已清空，等待接入权威数据源',
    rangeOptions: [
      { v: 30, label: '近30天' }, { v: 90, label: '近90天' },
      { v: 180, label: '近6个月' }, { v: 365, label: '近12个月' }
    ]
  };

  const markets = {
    verified: false,
    labels: ['08/07', '08/10', '08/11', '08/12', '08/13', '08/14', '08/17', '08/18', '08/19', '08/20'],
    quotes: [
      { name: '美元指数', value: '104.2', chg: 0.3, up: true },
      { name: '现货黄金', value: '2472', chg: 1.2, up: true },
      { name: '白银', value: '29.8', chg: 1.5, up: true },
      { name: 'WTI原油', value: '83.0', chg: 1.5, up: true },
      { name: '布伦特原油', value: '86.2', chg: 1.4, up: true },
      { name: '天然气', value: '2.72', chg: 2.3, up: true },
      { name: '沪铜', value: '76800', chg: 1.1, up: true },
      { name: '铁矿石', value: '826', chg: 1.2, up: true },
      { name: '沪深300', value: '3700', chg: 1.4, up: true },
      { name: '标普500', value: '5720', chg: 0.5, up: true },
      { name: '恒生指数', value: '18180', chg: 1.3, up: true },
      { name: '纳斯达克100', value: '20800', chg: 0.8, up: true },
      { name: '美元兑人民币', value: '7.10', chg: -0.2, up: false },
      { name: '欧元美元', value: '1.102', chg: 0.4, up: true },
      { name: '美元日元', value: '144.8', chg: -0.5, up: false },
      { name: 'VIX恐慌指数', value: '14.8', chg: -2.1, up: false }
    ],
    sentiment: [
      { name: '美元指数', value: '104.2', chg: 0.3, note: 'DXY' },
      { name: 'VIX恐慌指数', value: '14.8', chg: -2.1, note: 'Volatility' },
      { name: '美国10年期国债', value: '4.28%', chg: -0.03, note: 'US 10Y' },
      { name: '中国10年期国债', value: '1.96%', chg: 0.01, note: 'CN 10Y' },
      { name: '美元兑人民币', value: '7.10', chg: -0.2, note: 'USD/CNY' },
      { name: '人民币汇率指数', value: '98.6', chg: 0.1, note: 'CFETS' }
    ],
    fx: {
      series: [
        { name: 'USD/CNY', color: '#2563eb', values: [7.16, 7.15, 7.17, 7.16, 7.14, 7.13, 7.12, 7.11, 7.12, 7.10] },
        { name: 'EUR/USD', color: '#0d9f6e', values: [1.087, 1.09, 1.088, 1.092, 1.095, 1.093, 1.096, 1.099, 1.098, 1.102] },
        { name: 'USD/JPY', color: '#f59e0b', values: [147.2, 146.8, 147.5, 146.9, 146.2, 145.8, 145.4, 145.9, 145.2, 144.8] },
        { name: 'GBP/USD', color: '#7c3aed', values: [1.268, 1.272, 1.27, 1.275, 1.279, 1.277, 1.281, 1.285, 1.283, 1.288] },
        { name: 'AUD/USD', color: '#dc2626', values: [0.652, 0.655, 0.654, 0.658, 0.661, 0.659, 0.663, 0.667, 0.665, 0.67] },
        { name: 'USD/CHF', color: '#0891b2', values: [0.864, 0.862, 0.865, 0.861, 0.859, 0.86, 0.857, 0.855, 0.856, 0.853] }
      ],
      stats: [
        { name: 'USD/CNY', price: '7.10', chg: 0.2, week: 0.6, month: -1.1, ytd: 2.1, high: 7.18, low: 7.05 },
        { name: 'EUR/USD', price: '1.102', chg: 0.4, week: 0.8, month: 1.3, ytd: -0.4, high: 1.108, low: 1.085 },
        { name: 'USD/JPY', price: '144.8', chg: -0.5, week: -1.2, month: -2.4, ytd: 3.6, high: 148.2, low: 144.2 },
        { name: 'GBP/USD', price: '1.288', chg: 0.3, week: 0.7, month: 1.1, ytd: 0.6, high: 1.292, low: 1.265 },
        { name: 'AUD/USD', price: '0.670', chg: 0.4, week: 0.9, month: 1.8, ytd: 2.2, high: 0.673, low: 0.648 },
        { name: 'USD/CHF', price: '0.853', chg: -0.2, week: -0.5, month: -0.9, ytd: 1.2, high: 0.868, low: 0.851 }
      ]
    },
    metals: {
      series: [
        { name: '现货黄金', color: '#d97706', values: [2385, 2401, 2392, 2418, 2430, 2425, 2441, 2456, 2450, 2472] },
        { name: '白银', color: '#94a3b8', values: [27.8, 28.1, 27.9, 28.4, 28.8, 28.6, 29.0, 29.4, 29.2, 29.8] },
        { name: '铂金', color: '#0891b2', values: [982, 990, 986, 1002, 1015, 1009, 1024, 1038, 1032, 1051] },
        { name: '钯金', color: '#7c3aed', values: [918, 930, 925, 942, 955, 948, 966, 980, 972, 995] }
      ],
      stats: [
        { name: '现货黄金', price: '2472', chg: 1.2, week: 2.1, month: 3.6, ytd: 12.8, high: 2486, low: 2302 },
        { name: '白银', price: '29.8', chg: 1.5, week: 2.4, month: 4.2, ytd: 14.5, high: 30.1, low: 26.8 },
        { name: '铂金', price: '1051', chg: 1.0, week: 1.8, month: 3.0, ytd: 6.2, high: 1062, low: 942 },
        { name: '钯金', price: '995', chg: 1.3, week: 2.2, month: 4.0, ytd: 8.5, high: 1008, low: 885 }
      ]
    },
    energy: {
      series: [
        { name: 'WTI原油', color: '#f97316', values: [78.2, 79.1, 78.5, 80.2, 79.6, 80.8, 81.4, 80.9, 82.1, 83.0] },
        { name: '布伦特原油', color: '#7c3aed', values: [81.5, 82.4, 81.9, 83.6, 83.0, 84.1, 84.8, 84.2, 85.4, 86.2] },
        { name: '天然气', color: '#0891b2', values: [2.42, 2.38, 2.45, 2.52, 2.49, 2.55, 2.61, 2.58, 2.66, 2.72] },
        { name: '汽油', color: '#dc2626', values: [2.42, 2.45, 2.43, 2.49, 2.52, 2.5, 2.55, 2.58, 2.56, 2.61] }
      ],
      stats: [
        { name: 'WTI原油', price: '83.0', chg: 1.5, week: 2.8, month: 5.4, ytd: 8.2, high: 83.6, low: 74.2 },
        { name: '布伦特原油', price: '86.2', chg: 1.4, week: 2.6, month: 5.1, ytd: 7.6, high: 86.8, low: 77.5 },
        { name: '天然气', price: '2.72', chg: 2.3, week: 4.0, month: 6.8, ytd: -12.5, high: 2.85, low: 2.18 },
        { name: '汽油', price: '2.61', chg: 1.2, week: 2.2, month: 3.9, ytd: 4.5, high: 2.68, low: 2.31 }
      ]
    },
    commodities: {
      series: [
        { name: '沪铜', color: '#dc2626', values: [73500, 74100, 73800, 74600, 75200, 74900, 75500, 76200, 75900, 76800] },
        { name: '沪铝', color: '#2563eb', values: [19600, 19800, 19700, 19950, 20100, 20000, 20250, 20400, 20300, 20580] },
        { name: '沪锌', color: '#7c3aed', values: [22800, 23100, 22950, 23300, 23550, 23400, 23700, 23950, 23800, 24120] },
        { name: '铁矿石', color: '#0891b2', values: [760, 775, 768, 782, 795, 790, 802, 815, 810, 826] },
        { name: '螺纹钢', color: '#0d9f6e', values: [3180, 3220, 3200, 3250, 3290, 3270, 3310, 3360, 3340, 3400] },
        { name: '焦煤', color: '#f59e0b', values: [1380, 1405, 1392, 1420, 1445, 1432, 1460, 1488, 1472, 1505] }
      ],
      stats: [
        { name: '沪铜', price: '76800', chg: 1.1, week: 2.3, month: 4.8, ytd: 9.6, high: 77200, low: 70800 },
        { name: '沪铝', price: '20580', chg: 0.9, week: 1.8, month: 3.6, ytd: 7.2, high: 20720, low: 18850 },
        { name: '沪锌', price: '24120', chg: 1.0, week: 2.0, month: 4.1, ytd: 8.0, high: 24280, low: 22050 },
        { name: '沪镍', price: '129800', chg: 1.3, week: 2.5, month: 5.2, ytd: 10.5, high: 131200, low: 118600 },
        { name: '铁矿石', price: '826', chg: 1.2, week: 2.4, month: 4.6, ytd: 9.2, high: 835, low: 742 },
        { name: '螺纹钢', price: '3400', chg: 1.0, week: 2.0, month: 3.8, ytd: 6.4, high: 3430, low: 3050 },
        { name: '焦煤', price: '1505', chg: 1.4, week: 2.6, month: 5.0, ytd: 9.8, high: 1520, low: 1320 },
        { name: '动力煤', price: '912', chg: 0.8, week: 1.5, month: 2.6, ytd: 3.2, high: 925, low: 845 },
        { name: '大豆', price: '3850', chg: 0.6, week: 1.2, month: 2.2, ytd: 4.0, high: 3880, low: 3580 },
        { name: '玉米', price: '2280', chg: 0.4, week: 0.8, month: 1.5, ytd: 2.8, high: 2300, low: 2150 },
        { name: '小麦', price: '2550', chg: 0.5, week: 1.0, month: 1.8, ytd: 3.4, high: 2580, low: 2400 },
        { name: '白糖', price: '6120', chg: 0.7, week: 1.4, month: 2.4, ytd: 5.0, high: 6160, low: 5780 }
      ]
    },
    agriculture: {
      series: [
        { name: '大豆', color: '#d97706', values: [3850, 3865, 3840, 3880, 3905, 3890, 3920, 3945, 3930, 3960] },
        { name: '玉米', color: '#2563eb', values: [2280, 2290, 2275, 2300, 2315, 2308, 2325, 2340, 2330, 2350] },
        { name: '小麦', color: '#0d9f6e', values: [2550, 2560, 2545, 2570, 2585, 2578, 2595, 2610, 2600, 2620] },
        { name: '白糖', color: '#7c3aed', values: [6120, 6140, 6110, 6160, 6190, 6175, 6210, 6240, 6220, 6260] }
      ],
      stats: [
        { name: '大豆', price: '3960', chg: 0.6, week: 1.2, month: 2.4, ytd: 4.2, high: 3980, low: 3680 },
        { name: '玉米', price: '2350', chg: 0.5, week: 1.0, month: 1.8, ytd: 3.0, high: 2360, low: 2210 },
        { name: '小麦', price: '2620', chg: 0.4, week: 0.9, month: 1.6, ytd: 2.9, high: 2640, low: 2480 },
        { name: '白糖', price: '6260', chg: 0.7, week: 1.3, month: 2.5, ytd: 5.2, high: 6280, low: 5900 }
      ]
    },
    indexFutures: {
      series: [
        { name: '沪深300', color: '#0d9f6e', values: [3520, 3550, 3530, 3580, 3610, 3590, 3630, 3670, 3650, 3700] },
        { name: '上证50', color: '#2563eb', values: [2420, 2440, 2430, 2460, 2480, 2470, 2500, 2520, 2510, 2545] },
        { name: '中证500', color: '#7c3aed', values: [5420, 5460, 5440, 5500, 5540, 5520, 5570, 5610, 5590, 5640] },
        { name: '标普500', color: '#dc2626', values: [5580, 5600, 5590, 5620, 5650, 5640, 5670, 5700, 5690, 5720] },
        { name: '纳斯达克100', color: '#0891b2', values: [19850, 20000, 19920, 20150, 20300, 20240, 20450, 20620, 20560, 20800] },
        { name: '恒生指数', color: '#f59e0b', values: [17200, 17350, 17280, 17500, 17680, 17590, 17800, 18020, 17950, 18180] }
      ],
      stats: [
        { name: '沪深300', price: '3700', chg: 1.4, week: 2.6, month: 5.2, ytd: 8.8, high: 3720, low: 3340 },
        { name: '上证50', price: '2545', chg: 1.2, week: 2.2, month: 4.4, ytd: 7.4, high: 2560, low: 2310 },
        { name: '中证500', price: '5640', chg: 1.5, week: 2.8, month: 5.6, ytd: 10.2, high: 5670, low: 5050 },
        { name: '标普500', price: '5720', chg: 0.5, week: 1.2, month: 2.6, ytd: 11.8, high: 5730, low: 5120 },
        { name: '纳斯达克100', price: '20800', chg: 0.8, week: 1.6, month: 3.4, ytd: 14.2, high: 20900, low: 17850 },
        { name: '道琼斯', price: '41200', chg: 0.4, week: 1.0, month: 2.2, ytd: 8.6, high: 41350, low: 38100 },
        { name: '恒生指数', price: '18180', chg: 1.3, week: 2.5, month: 5.0, ytd: 12.4, high: 18250, low: 15800 },
        { name: '日经225', price: '40200', chg: 0.9, week: 1.8, month: 3.6, ytd: 9.4, high: 40400, low: 35800 },
        { name: '富时100', price: '8290', chg: 0.4, week: 0.9, month: 1.8, ytd: 5.6, high: 8320, low: 7780 },
        { name: '德国DAX', price: '19150', chg: 1.0, week: 2.0, month: 4.2, ytd: 13.6, high: 19250, low: 16600 }
      ]
    }
  };


  markets.quotes = [];
  markets.sentiment = [];
  ['fx', 'metals', 'energy', 'commodities', 'agriculture', 'indexFutures'].forEach(function (k) {
    if (markets[k]) { markets[k].series = []; markets[k].stats = []; }
  });

  window.DATA = {
    sectors, institutions, companies, deals, flows, signals, rules, meta, markets
  };
})();
