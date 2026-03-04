// 时间范围
export const START_YEAR = 2016;
export const END_YEAR = 2027;
export const TOTAL_YEARS = END_YEAR - START_YEAR + 1;

// 颜色映射（更专业的配色）
export const colorMap: Record<string, string> = {
  '#E34F26': '#E34F26',
  '#F7DF1E': '#C9B800',
  '#0769AD': '#0769AD',
  '#31A8FF': '#31A8FF',
  '#42B883': '#42B883',
  '#8DD6F9': '#6BB6EA',
  '#CC6699': '#CC6699',
  '#F05032': '#E5322D',
  '#61DAFB': '#4CC9E8',
  '#3178C6': '#2A6CC5',
  '#339933': '#2D8A2D',
  '#2496ED': '#1D8BD4',
  '#3776AB': '#2E6B9F',
  '#4479A1': '#3E6D95',
  '#DC382D': '#C83028',
  '#326CE5': '#2A5CC2',
  '#FF9900': '#E88A00',
  '#000000': '#000000',
  '#00ADD8': '#009BC0',
  '#DEA584': '#D49475',
};

// 判断某年的部分月份是否在时间段内
export const getYearStatus = (year: number, ranges: { start: string; end: string }[]) => {
  const fullMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const activeMonths: number[] = [];
  
  fullMonths.forEach(month => {
    const monthStart = `${year}${String(month).padStart(2, '0')}010000`;
    const monthEnd = `${year}${String(month).padStart(2, '0')}312359`;
    
    if (ranges.some(r => r.start <= monthEnd && r.end >= monthStart)) {
      activeMonths.push(month);
    }
  });
  
  return activeMonths;
};
