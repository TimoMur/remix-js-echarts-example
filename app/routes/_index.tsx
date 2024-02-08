import { MetaFunction, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CalendarHeatmap } from '~/components/Heatmap.client';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export async function loader() {
  return json({});
}

export default function Index() {

  useLoaderData<typeof loader>();

  let chart = <div>Loading</div>

  if (typeof document === "undefined") {
    // running in a server environment
  } else {
    // running in a browser environment
    chart = <CalendarHeatmap />
  }



  return (
    <div>
      <h1>Welcome to Remix!</h1>
      <div style={{width: '100%', height: '100%'}}>
        {chart}
      </div>
    </div>
  )
}
