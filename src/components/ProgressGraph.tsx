import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';



type ProgressGraphProps = {
  data: number[];
};

export default function ProgressGraph({ data }: ProgressGraphProps) {
  return (
    <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 20, marginVertical: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Total Volume</Text>
      <VictoryChart
        theme={VictoryTheme.material}
        height={120}
        padding={{ top: 10, bottom: 30, left: 40, right: 10 }}
        domainPadding={{ x: 10 }}
      >
        <VictoryLine
          data={data.map((y, x) => ({ x, y }))}
          style={{ data: { stroke: "#457DF1", strokeWidth: 3 } }}
        />
      </VictoryChart>
    </View>
  );
}
