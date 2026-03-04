import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面5：辽宁易为项目 ====================
const LiaoningYiweiPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2 min-h-[72px]">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">辽宁易为项目</h1>
      <p className="text-sm text-gray-500 mt-1">私域电商、跨境平台、智慧看护等多领域项目研发</p>
      <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">辽宁易为营销控股集团有限公司</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">核心全栈 (AI) 架构师</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">2025.9 - 至今</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    {/* 内容区域 */}
    <div className="flex gap-6 flex-1 overflow-y-auto">
      <div className="w-full space-y-3">
        {/* 1. 珍酒城 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">1. 珍酒城 (私域电商)</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>珍酒城 (私域电商，springboot uniapp, 珍享秒杀，珍享团购，1 拉 3 带 9 营销推广活动研发)
            </p>
            <p>
              一种基于 SpringBoot 和 Uniapp 的私域电商管理系统，用于珍酒类商品的私域销售，支持珍享秒杀、珍享团购及 "1 拉 3 带 9"
              模式的营销推广活动全流程管理。
            </p>
          </div>
        </div>

        {/* 2. TK店群管理平台 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">2. TK 店群管理平台 (跨境供销平台)</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>TK 店群管理平台 (跨境供销平台，springboot)
            </p>
            <p>
              一种基于 SpringBoot 的跨境电商店群供销管理平台，用于多店铺跨境商品的供销链路管理、订单处理及库存同步。
            </p>
          </div>
        </div>

        {/* 3. 辽宁跨境电商平台 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">3. 辽宁跨境电商平台 (跨境平台)</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>辽宁跨境电商平台 (跨境平台)
            </p>
            <p>
              一种面向辽宁区域的跨境电商综合服务平台，用于跨境商品的展示、交易、报关、物流跟踪及跨境贸易数据管理。
            </p>
          </div>
        </div>

        {/* 4. 跨境独立站 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">4. 跨境独立站（php laravel）</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>跨境独立站（php laravel）
            </p>
            <p>
              一种基于 PHP Laravel 框架开发的跨境电商独立站系统，用于搭建自有品牌的跨境电商站点，实现商品展示、订单支付、跨境物流对接等功能。
            </p>
          </div>
        </div>

        {/* 5. 国资委科创助手 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">
            5. 国资委科创助手（Dify,python,vue3ts）
          </h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>国资委科创助手（Dify,python,vue3ts）
            </p>
            <p>
              一种基于 Dify、Python 和 Vue3+TS 开发的国资委科创服务助手系统，用于为国资委相关科创工作提供数据统计、项目管理、智能分析及流程审批等辅助服务。
            </p>
          </div>
        </div>

        {/* 6. 辽易智能科技平台 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">
            6. 辽易智能科技平台（strapi,react next）
          </h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>辽易智能科技平台（strapi,react next）
            </p>
            <p>
              一种基于 Strapi 和 React Next.js 开发的辽易智能科技综合管理平台，用于智能科技类业务的内容管理、数据可视化、用户权限管控及业务流程自动化处理。
            </p>
          </div>
        </div>

        {/* 7. 中源谈话工作 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">
            7. 中源谈话工作（若依，海康摄像头，NVR，固定审讯设备）
          </h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>中源谈话工作（若依，海康摄像头，NVR，固定审讯设备）
            </p>
            <p>
              一种基于若依框架开发的谈话工作管理系统，用于对接海康摄像头、NVR 及固定审讯设备，实现谈话过程的音视频采集、存储、回放及设备集中管控。
            </p>
          </div>
        </div>

        {/* 8. 康泰智慧看护 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">
            8. 康泰智慧看护（若依，海康摄像头，蓝牙网关 mq）
          </h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>康泰智慧看护（若依，海康摄像头，蓝牙网关 mq）
            </p>
            <p>
              一种基于若依框架的智慧看护管理系统，用于对接海康摄像头和蓝牙网关 MQ 协议设备，实现看护场景下的视频监控、设备状态监测、异常告警及数据实时传输。
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>辽宁易为项目</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default LiaoningYiweiPage;