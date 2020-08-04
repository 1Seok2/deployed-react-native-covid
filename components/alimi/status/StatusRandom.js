import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';


export default function StatusRandomSentence(props) {
    const GoodSentences = [
        "이 주변은 청정지역 !",
        "개인위생 지켜주시며 다니세요",
        "밀린 장을 보러 가볼까요 ?",
        "친목 때도 조심 ! 아시죠 ?",
        "사회적 거리두기는 지켜주세요",
        "미뤄뒀던 미용실을 가볼까요 ?",
        "그래도 실내는 언제나 조심 !",
        "미뤄뒀던 일들을 해결하죠 !"
    ];
    const SosoSentences = [
        "이정도면 간단한 외출 쯤이야 ..",
        "마스크 잘 쓰고 다니세요 !",
        "손 잘 씻고 다니세요 !",
        "방심은 금물 !",
        "마스크는 항상 해야합니다",
        "돌아다니는 사람은 자신만이 아니에요",
        "나갈까 말까 ..?",
        "사회적 거리두기는 필수 !"
    ];
    const BadSentences = [
        "나가시지 않는 것을 추천드립니다",
        "꼭 밖에 나가셔야 하나요 ?",
        "이럴땐 집에 숨어야 해요",
        "주변을 조심하세요 !",
        "집에 아무도 초대하지 마세요",
        "집에 계시는게 좋을 것 같네요",
        "힘든 출근길에도 조심 !",
        "신나는 퇴근길에도 조심 !"
    ];
    const TerrSentences = [
        "외출하지 않으시는게 좋습니다",
        "꼭 밖에 나가셔야 하나요 ?",
        "좀 심각한데요 ..?",
        "집에서 할 재밌는 것을 찾으세요",
        "힘든 출퇴근길이 되겠군요",
        "외 출 금 지",
        "아무도 집에 초대하지 마세요",
        "나 혼자가 최고 !"
    ];

    const chooseSentence = () => {
        let RandomNum = Math.floor(Math.random() * GoodSentences.length);
        if(props.condition == '좋음') return GoodSentences[RandomNum];
        else if(props.condition == '조금 위험') return SosoSentences[RandomNum];
        else if(props.condition == '위험') return BadSentences[RandomNum];
        else if(props.condition == '매우 위험') return TerrSentences[RandomNum];
        else return "Error";
    }

    return (
        <>
            {/* it shows the patients number around you */}
            <View style={styles.countSentence}>
                <Text style={styles.countSentenceTxt}>{chooseSentence()}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    countSentence : {
        flex : 2,
        textAlign : "center",
        textAlignVertical : "center",
    },
      countSentenceTxt : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "bottom",
        fontSize : 24,
        color : "white",
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 6
    }
})
