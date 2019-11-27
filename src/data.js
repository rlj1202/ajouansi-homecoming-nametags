const persons = [
	{
		"name": "김동관",
		"admission_year": "10",
		"group": "졸업생"
	},
	{
		"name": "김동이",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "김동훈",
		"admission_year": "11",
		"group": "졸업생"
	},
	{
		"name": "김문경",
		"admission_year": "07",
		"group": "졸업생"
	},
	{
		"name": "김인애",
		"admission_year": "09",
		"group": "졸업생"
	},
	{
		"name": "김지선",
		"admission_year": "11",
		"group": "졸업생"
	},
	{
		"name": "김지수",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "김태영",
		"admission_year": "10",
		"group": "졸업생"
	},
	{
		"name": "김태우",
		"admission_year": "11",
		"group": "졸업생"
	},
	{
		"name": "박민기",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "박성준",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "박성희",
		"admission_year": "08",
		"group": "졸업생"
	},
	{
		"name": "박용균",
		"admission_year": "05",
		"group": "졸업생"
	},
	{
		"name": "박호민",
		"admission_year": "10",
		"group": "졸업생"
	},
	{
		"name": "서경희",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "송인호",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "이서예",
		"admission_year": "14",
		"group": "졸업생"
	},
	{
		"name": "이용희",
		"admission_year": "06",
		"group": "졸업생"
	},
	{
		"name": "이재연",
		"admission_year": "10",
		"group": "졸업생"
	},
	{
		"name": "이주명",
		"admission_year": "15",
		"group": "졸업생"
	},
	{
		"name": "정슬아",
		"admission_year": "08",
		"group": "졸업생"
	},
	{
		"name": "정진우",
		"admission_year": "05",
		"group": "졸업생"
	},
	{
		"name": "정현수",
		"admission_year": "14",
		"group": "졸업생"
	},
	{
		"name": "조연희",
		"admission_year": "10",
		"group": "졸업생"
	},
	{
		"name": "조현성",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "주승규",
		"admission_year": "11",
		"group": "졸업생"
	},
	{
		"name": "최승주",
		"admission_year": "11",
		"group": "졸업생"
	},
	{
		"name": "편경민",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "한만영",
		"admission_year": "12",
		"group": "졸업생"
	},
	{
		"name": "황하민",
		"admission_year": "08",
		"group": "졸업생"
	},
	{
		"name": "윤성복",
		"admission_year": "14",
		"group": "재학생"
	},
	{
		"name": "하주헌",
		"admission_year": "17",
		"group": "재학생"
	},
	{
		"name": "김민규",
		"admission_year": "15",
		"group": "재학생"
	},
	{
		"name": "심지수",
		"admission_year": "18",
		"group": "재학생"
	},
	{
		"name": "김영우",
		"admission_year": "16",
		"group": "재학생"
	},
	{
		"name": "이태경",
		"admission_year": "17",
		"group": "재학생"
	},
	{
		"name": "민서현",
		"admission_year": "16",
		"group": "재학생"
	},
	{
		"name": "김광호",
		"admission_year": "15",
		"group": "재학생"
	},
	{
		"name": "김준서",
		"admission_year": "15",
		"group": "재학생"
	},
	{
		"name": "이용재",
		"admission_year": "15",
		"group": "재학생"
	},
	{
		"name": "엄지혜",
		"admission_year": "16",
		"group": "재학생"
	},
	{
		"name": "강지은",
		"admission_year": "17",
		"group": "재학생"
	},
	{
		"name": "주진형",
		"admission_year": "17",
		"group": "휴학생"
	},
	{
		"name": "박수빈",
		"admission_year": "18",
		"group": "재학생"
	},
	{
		"name": "김형호",
		"admission_year": "16",
		"group": "재학생"
	},
	{
		"name": "정진원",
		"admission_year": "17",
		"group": "휴학생"
	},
	{
		"name": "신상민",
		"admission_year": "18",
		"group": "재학생"
	},
	{
		"name": "현광빈",
		"admission_year": "17",
		"group": "재학생"
	},
	{
		"name": "정세훈",
		"admission_year": "15",
		"group": "재학생"
	},
	{
		"name": "백봉현",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "홍건화",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "최지헌",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "김현빈",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "김동권",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "이나정",
		"admission_year": "17",
		"group": "재학생"
	},
	{
		"name": "양태규",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "서병찬",
		"admission_year": "16",
		"group": "재학생"
	},
	{
		"name": "이선우",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "전상헌",
		"admission_year": "19",
		"group": "신입생"
	},
	{
		"name": "이연주",
		"admission_year": "15",
		"group": "재학생"
	},
	{
		"name": "안슬비",
		"admission_year": "18",
		"group": "재학생"
	},
	{
		"name": "정재욱",
		"admission_year": "19",
		"group": "신입생"
	}
]

export default persons;
