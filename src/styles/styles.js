import { StyleSheet, Dimensions, StatusBar } from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const Colors = {
    primary: '#005246',
    secondary: '#E1950B',
    darkgrey: '#3B3D4C',
    darkgrey2: '#444654', // for grey button
    lightgrey: '#A0A0A0',
    white: '#FFFFFF',
    lightprimary: '#DDDDDD', // for disabled button
    lightBlack: '#1F232F',
    black: '#000000',
    yellow: '#F7B947',
    white75: 'rgba(255, 255, 255, 0.75)',
    blue: '#004D93',
    lightBlue: '#0BB4D7',
    red: '#E41318'
}

const Formsty = StyleSheet.create({
    input: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Exo-Medium',
        // lineHeight: 35
    },
    inputDisabled: {   
        opacity: 0.6,
    },
    inputError: {
        borderBottomColor: Colors.red,
    },
    inputSuccess: {
        // borderBottomColor: Colors.lightBlue,
    },
    inputGroup: {
        backgroundColor: Colors.darkgrey,
        color: '#000',
        paddingLeft: 10,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        width: '100%',
        flex: 1,
        borderRadius: 0,
        borderBottomWidth: 2,
        borderColor: 'rgba(171, 180, 189, 0.3)',
        fontSize: 20,
        fontFamily: 'Exo-regular',
        height: 50
    },
    inputGroupError: {
        borderBottomWidth: 2,
        borderColor: '#e87b04',
    },
    label: {
        color: Colors.lightgrey,
        fontSize: 14,
        fontFamily: 'Exo-regular',
        lineHeight: 16,
        marginBottom: 5,
    },
    stickLeftLabel: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: 'Exo-regular',
    },
    itemWrap: {
        borderBottomWidth: 0,
    },
    heading: {
        fontSize: 27,
        color: '#fff',
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600'
    },
    selectStackedWrap: {
     borderBottomWidth: 1,
     borderBottomColor: 'rgba(171, 180, 189, 0.3)',
    },
    selectStackedLabel: {
        fontSize: 14,
        color: '#fff',      
    },
    selectStackedText: {
        color: Colors.primary,
        fontFamily: 'Exo',
        fontSize: 20,
        paddingTop: 2,
        paddingBottom: 2,
    },
    errorMessage: {
        fontSize: 12,
        fontWeight: '100',
        lineHeight: 15,
        color: Colors.red,
        marginTop: 10
    }    
})

const Buttons = StyleSheet.create({
    Secondary: {
        backgroundColor: Colors.darkgrey2,
        borderWidth: 1,
        borderColor: Colors.white,
        color: Colors.white,
        borderRadius: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        elevation: 3
    },
    SecondaryText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: 16,
        height: 50,
        lineHeight: 50,
        fontFamily: 'Exo',
    },
    Primary: {
        backgroundColor: Colors.primary,
        color: Colors.white,
        borderRadius: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    PrimarySmall: {
        backgroundColor: Colors.primary,
        color: Colors.white,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        minWidth: '30%'
    },
    PrimaryText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 22      ,
        height: 50,
        lineHeight: 45,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600'        
    },
    btnPrimaryText: {
        textAlign: 'center',
        color: Colors.primary,
        fontSize: 16,
        height: 50,
        lineHeight: 45,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600'
    },
    OutlinePrimary: {
        borderWidth: 1,
        borderColor: Colors.primary,
        color: Colors.white,
        borderRadius: 4,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    OutlineSmallPrimary: {
        borderWidth: 1,
        borderColor: Colors.primary,
        color: Colors.white,
        borderRadius: 4,
        minWidth: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
    },
    OutlinePrimaryText: {
        textAlign: 'center',
        color: Colors.primary,
        fontSize: 16,
        height: 50,
        lineHeight: 50,
        fontFamily: 'Exo',
        fontWeight: '500'
    },
    BtnDisabled: {
        backgroundColor: Colors.lightprimary,
        color: Colors.darkgrey2,
        fontWeight: '500',
    },
    BtnDisabledText: {
        color: Colors.white,
        fontFamily: 'Exo',
        fontWeight: '500'
    },
    buttonWrap: {
        alignItems: 'flex-end',
        justifyContent: "flex-end",
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 15,
        paddingTop: 15,
    },
    maxminWrap: {
        flexDirection: 'row',
        height: 35,
        borderRadius: 4,
        width: 120,
        backgroundColor: Colors.primary,
        marginTop: 20
    },
    minBtn: {
        height: 35,
        flex: 0.333,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maxBtn: {
        height: 35,
        flex: 0.333,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    minmaxInput: {
        height: 35,
        flex: 0.333,
        borderColor: Colors.primary,
        borderWidth: 2,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkgrey
    },
    minmaxText: {
        color: '#fff',
        fontSize: 18,
        margin: 0
    },
    btnText: {
        fontSize: 22,
        fontFamily: 'Ex-Bold',
        fontWeight: '700'
    }
})

const Helpers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 0,
        paddingBottom: 20,
    },
    containerFluid: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    mt_0: {
        marginTop: 0,
    },
    mb_0: {
        marginBottom: 0,
    },
    mt_1: {
        marginTop: 10,
    },
    mt_15: {
        marginTop: 15,
    },
    mb_1: {
        marginBottom: 10,
    },
    mb_05: {
        marginBottom: 5,
    },
    mt_2: {
        marginTop: 20,
    },
    mb_2: {
        marginBottom: 20,
    },
    mt_3: {
        marginTop: 30,
    },
    mb_3: {
        marginBottom: 30,
    },
    mt_4: {
        marginTop: 40,
    },
    mb_4: {
        marginBottom: 40,
    },
    mt_5: {
        marginTop: 50,
    },
    mb_5: {
        marginBottom: 50,
    },
    mt_6: {
        marginTop: 60,
    },
    mb_6: {
        marginBottom: 60,
    },
    mt_6: {
        marginTop: 60,
    },
    ml_6: {
        marginLeft: 60,
    },
    mr_0: {
        marginRight: 0,
    },
    ml_0: {
        marginLeft: 0,
    },
    mr_2: {
        marginRight: 20,
    },
    ml_2: {
        marginLeft: 20,
    },
    ml_1: {
        marginLeft: 10,
    },
    mr_3: {
        marginRight: 30,
    },
    ml_3: {
        marginLeft: 30,
    },
    mr_4: {
        marginRight: 40,
    },
    ml_4: {
        marginLeft: 40,
    },
    mr_5: {
        marginRight: 50,
    },
    ml_5: {
        marginLeft: 50,
    },
    mr_6: {
        marginRight: 60,
    },
    pt_0: {
        paddingTop: 0,
    },
    pb_0: {
        paddingBottom: 0,
    },
    pt_1: {
        paddingTop: 10,
    },
    pb_1: {
        paddingBottom: 10,
    },
    pt_2: {
        paddingTop: 20,
    },
    pb_2: {
        paddingBottom: 20,
    },
    pt_3: {
        paddingTop: 30,
    },
    pb_3: {
        paddingBottom: 30,
    },
    pt_4: {
        paddingTop: 40,
    },
    pb_4: {
        marginBottom: 40,
    },
    pt_5: {
        paddingTop: 50,
    },
    pb_5: {
        paddingBottom: 50,
    },
    pt_6: {
        paddingTop: 60,
    },
    pb_6: {
        paddingBottom: 60,
    },

    pr_0: {
        paddingRight: 0,
    },
    pl_0: {
        paddingLeft: 0,
    },
    pr_2: {
        paddingRight: 20,
    },
    pl_2: {
        paddingLeft: 20,
    },
    pr_3: {
        paddingRight: 30,
    },
    pl_3: {
        paddingLeft: 30,
    },
    pr_4: {
        paddingRight: 40,
    },
    pl_4: {
        paddingLeft: 50,
    },
    pr_5: {
        paddingRight: 50,
    },
    pl_5: {
        marginLeft: 40,
    },
    pr_6: {
        paddingRight: 60,
    },
    pl_6: {
        paddingLeft: 60,
    },
    pb_15: {
        paddingBottom: 15,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 27,
        lineHeight: 36,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        color: '#000'
    },
    sectionHeading: {
        color: Colors.white,
        fontSize: 20,
        fontFamily: 'Exo-Medium',
        fontWeight: '500'
    },
    sectionSubTitle: {
        fontSize: 14,
        color: Colors.lightgrey,
        fontFamily: 'Exo'
    },
    sectionPara: {
        color: Colors.lightgrey,
        fontSize: 14,
        fontFamily: 'Exo'
    },
    dotlist: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Exo',
        marginBottom: 8
    },
    header: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    HeaderLeft: {
        paddingLeft: 18,
    },
    HeaderRight: {
        paddingRight: 30,
    },
    flexFill: {
        flex: 1
    },
    textPrimary: {
        color: Colors.primary,
    },
    fontRegular: {
        fontFamily: 'Exo-Regular',
    },
    fontMedium: {
        fontFamily: 'Exo-Medium',
        fontWeight: '500'
    },
    fontSemiBold: {
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600'
    },
    fontBold: {
        fontFamily: 'Ex-Bold',
        fontWeight: '700'
    },
    textWhite: {
        color: '#fff',
    },
    Divider: {
        width: '100%',
        height: 2,
        backgroundColor: Colors.primary,
        marginTop: 50,
        marginBottom: 5
    },
    DividerLight: {
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(171, 180, 189, 0.3)',
    },
    listTitle: {
        fontSize: 14,
        fontFamily: 'Exo',
        color: Colors.primary,
    },
    listTitle2: {        
        fontFamily: 'Exo',
        color: Colors.lightgrey,
        fontSize: 12
    },
    listLabel: {
        fontSize: 16,
        fontFamily: 'Exo',
        color: Colors.lightgrey
    },
    listItem: {
        fontSize: 16,
        fontFamily: 'Exo',
        color: Colors.white,
    },
    listContent: {
        fontSize: 18,
        fontFamily: 'Exo',
        color: Colors.white,
        flexWrap: 'wrap',
    },
    listColWrap: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginVertical: 5
    },
    listColLeft: {
        paddingRight: 30,
        flex: 0.7
    },
    listColRight: {
        flex: 0.3,
        textAlign: 'right'
    },
    radioSection: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    radioText: {
        color: 'rgba(0, 0, 0, 0.2)',
        fontSize: 20,
        fontFamily: 'Exo-Regular',
        lineHeight: 35,
        flex: 0.8
    },
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight + 7) : 0
    },
    loaderWrapper: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: 'center',
        justifyContent: "center"
    },
    stikcy: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15
    },
    width50: {
        width: '50%'
    },
    blackText: {
        color: Colors.black
    },
    dropShadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0, 
        justifyContent: 'flex-end'
    },
    text22: {
        fontSize: 20,
        lineHeight: 29,
        fontFamily: 'Exo-regular',
        color: '#000',
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center',
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        borderWidth: 1,
    }
});



const timePicker = StyleSheet.create({
    seprator: {
        width: 11,
        height: 3,
        backgroundColor: '#fff',
    },
    tpOutWrapTop: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    tpOutWrapBottom: {
        flexDirection: 'row',
        flex: 1,
    },
    tpWrapTop: {
        flexDirection: 'row',
        flex: 0.4,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tpWrapBottom: {
        flex: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    weekTitle: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Exo',
        fontWeight: '500',
        letterSpacing: 0.56,
        flex: 0.40,
    },
    switchLabel: {
        fontFamily: 'Exo',
        color: Colors.white,
        fontSize: 16,
        marginLeft: 10,
        marginTop: 0
    }
});
const SectionList = StyleSheet.create({
    userName: {
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        color: Colors.white
    },
    listItemGroup: {
        marginBottom: 40,
    },
    listItemGroupTitle: {
        fontSize: 12,
        color: Colors.white,
        fontFamily: 'Exo'
    },
    listItemWrap: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    serviceList: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: 17,
    },
    listItemTitle: {
        fontSize: 16,
        color: Colors.white,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 0,
        paddingRight: 0,
    },
    listItemSubTitle: {
        color: Colors.primary,
        fontSize: 14,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        textTransform: 'uppercase',
        paddingRight: 10,
    },
    innerWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

const ToastStyle = StyleSheet.create({
    wrapper: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: '#5cb85c',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 12,
        paddingBottom: 12,
        minHeight: 40,
        marginLeft: -20,
        marginRight: -20,
    },
    text: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Exo',
        fontWeight: '500',
        color: '#ffff'
    },
    errorText: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'Exo',
        fontWeight: '500',
        color: Colors.white
    },
    errorWrapper: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 14,
        backgroundColor: '#d85350',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 12,
        paddingBottom: 12,
        minHeight: 40,
        marginLeft: -20,
        marginRight: -20,
    }
});


const HeaderTop = StyleSheet.create({
    header: {
        backgroundColor: Colors.primary,
        paddingLeft: 30,
        paddingRight: 30,
    },
    headerSecond: {
        backgroundColor: Colors.lightgrey2,
        paddingLeft: 30,
        paddingRight: 30,
    },
    headerNav: {
        paddingBottom: 10,
        marginLeft: -15,
    },
    HeaderTitle: {
        color: Colors.darkgrey,
        fontSize: 30,
        lineHeight: 45,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        marginTop: 10,
    },
    Description: {
        color: Colors.darkgrey,
        fontSize: 14,
        fontFamily: 'Exo',
        marginTop: 5
    },
});

const Backgrounds = StyleSheet.create({
    Primary: {
        backgroundColor: Colors.darkgrey,
    },
    White: {
        backgroundColor: Colors.white,
    }
});

const Badges = StyleSheet.create({
    fillWaring: {
        borderRadius: 3,
        backgroundColor: '#9E7E43',
        borderWidth: 1,
        borderColor: '#F7B947',
        marginLeft: 15,
        fontSize: 12,
        color: '#fff',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
    },
    outlineDraft: {
        color: Colors.white,
        fontSize: 12,
        minWidth: 74,
        borderWidth: 1,
        borderColor: Colors.white,
        textAlign: 'center',
        height: 21,
        lineHeight: 21,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 3,
    },
    outlineSubmitted: {
        color: Colors.white,
        fontSize: 12,
        minWidth: 74,
        borderWidth: 1,
        borderColor: Colors.primary,
        textAlign: 'center',
        height: 21,
        lineHeight: 21,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 3,
    },
    outlineApproved: {
        color: Colors.white,
        fontSize: 12,
        minWidth: 74,
        borderWidth: 1,
        backgroundColor: '#47A748',
        borderColor: '#47A748',
        textAlign: 'center',
        height: 21,
        lineHeight: 21,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 3,
    },
    outlineRejected: {
        color: Colors.white,
        fontSize: 12,
        minWidth: 74,
        borderWidth: 1,
        borderColor: '#F7B947',
        textAlign: 'center',
        height: 21,
        lineHeight: 21,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 3,
    },
    outlineBlocked: {
        color: Colors.white,
        fontSize: 12,
        minWidth: 74,
        borderWidth: 1,
        borderColor: '#E50914',
        textAlign: 'center',
        height: 21,
        lineHeight: 21,
        fontFamily: 'Exo-SemiBold',
        fontWeight: '600',
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 3,
    },
});

const Offline = StyleSheet.create({
    overLay : {
        backgroundColor: 'gray',
        opacity: 0.6,
        position: 'absolute', 
        top: 0, 
        left: 0, 
        bottom: 0, 
        right: 0
    },
    customToast : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        backgroundColor: '#D0D0D0',
        // height: 75,
        padding: 15,
        width: '100%'
    }
});

export { Formsty, Buttons, ToastStyle, Badges, SectionList, Helpers, Backgrounds, timePicker, HeaderTop, Colors, Offline }