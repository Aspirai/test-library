/* import { Skeleton } from '@/components/ui/skeleton';

import style from './page.module.scss';

export default async function Home() {
  return (
    <div>
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
      <span className={style.title}>Hello</span>
      <span style={{ color: style.primaryColor }}>React!</span>
    </div>
  );
}
 */
import Component2 from '@/components/chart/chart_3/page';
import Component3 from '@/components/chart/chart_4/page';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import Component from '../components/chart/chart_1/page';
import Component1 from '../components/chart/chart_2/page';

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className=" w-full rounded-lg border p-1" style={{ height: '740px' }}>
      {/* 左侧导航组件 */}

      <ResizablePanel defaultSize={11}>
        <div className="flex h-[200px] items-center justify-center p-6 top-11">
          <span className="font-semibold" color="hsl(var(--chart-1))">
            Resizable Accessible resizable panel groups and layouts with keyboard support. Docs API Reference One Two
            Three
          </span>
        </div>
      </ResizablePanel>
      {/* 用于自定义拖动UI，可以是任意React元素。需要放置在两个ResizablePanel之间，不然无法拖动 */}

      <ResizableHandle className="rounded-lg border" />
      {/* 右侧图表组件 */}

      <ResizablePanel defaultSize={50} className="rounded-lg">
        {/* 设置direction属性为vertical，上下分割一次 */}
        <ResizablePanelGroup direction="vertical" className="w-full rounded-lg">
          <ResizablePanel defaultSize={47.5}>
            {/* 设置direction属性为horizontal，左右分割一次 */}
            <ResizablePanelGroup direction="horizontal" className="w-full rounded-lg">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <Component />
                </div>
              </ResizablePanel>
              {/* 使左右图表可以移动 */}
              <ResizableHandle className="rounded-lg border" />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <Component1 />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle className="rounded-lg border" />
          <ResizablePanel defaultSize={52.5}>
            {/* 设置direction属性为horizontal，左右分割一次 */}
            <ResizablePanelGroup direction="horizontal" className="w-full rounded-lg">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <Component2 />
                </div>
              </ResizablePanel>
              {/* 使左右图表可以移动 */}
              <ResizableHandle className="rounded-lg border" />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <Component3 />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
    </ResizablePanelGroup>
  );
}
