import { ActivatedRoute, Router, ParamMap } from '@angular/router';

export const updateChartLabels = (times: number[]) => {
  const formatDate = (time: number) => {
    const date = new Date(time);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const monthStr = `0${month}`.slice(-2);
    const dayStr = `0${day}`.slice(-2);
    return `${monthStr}/${dayStr}/${year}`;
  };
  const formatTime = (time: number) => {
    const date = new Date(time);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const hourStr = `0${hour}`.slice(-2);
    const minuteStr = `0${minute}`.slice(-2);
    return `${hourStr}:${minuteStr}`;
  };
  return times.map(time => `${formatDate(time)}\n${formatTime(time)}`);
};

export const initQueryParams = (activatedRoute: ActivatedRoute, router: Router, cb: () => void) => {
  const startDate = activatedRoute.snapshot.queryParamMap.get('start');
  const endDate = activatedRoute.snapshot.queryParamMap.get('end');
  if (!startDate || !endDate) {
    const start = new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).valueOf();
    const end = Date.now();
    router.navigate([], {
      relativeTo: activatedRoute,
      queryParams: { start, end },
      queryParamsHandling: 'merge',
      skipLocationChange: false,
    });
    cb();
  }
};

export const getStartAndEndDates = (params: ParamMap) => {
  let startDate = parseInt(params.get('start'), 10);
  let endDate = parseInt(params.get('end'), 10);
  if (!startDate || !endDate) {
    startDate = Date.now() - 1000 * 60 * 60 * 24;
    endDate = Date.now();
  }
  return [startDate, endDate];
};
