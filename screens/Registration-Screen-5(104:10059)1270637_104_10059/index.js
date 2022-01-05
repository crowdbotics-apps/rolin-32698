import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_72_6049}>
        <View style={styles.View_I72_6049_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I72_6049_17_223_11_116}
          />
        </View>
        <View style={styles.View_I72_6049_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I72_6049_17_224_11_127}
          />
          <View style={styles.View_I72_6049_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I72_6049_17_224_11_129}
            />
            <View style={styles.View_I72_6049_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I72_6049_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I72_6049_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I72_6049_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I72_6049_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I72_6049_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I72_6049_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I72_6049_17_224_11_148}
            />
            <View style={styles.View_I72_6049_17_224_11_155}>
              <View style={styles.View_I72_6049_17_224_11_156}>
                <Text style={styles.Text_I72_6049_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_72_6050}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f469/5a27/e7addb593cdccf409892498d70ece014"
          }}
          style={styles.ImageBackground_I72_6050_8_613}
        />
      </View>
      <View style={styles.View_72_6051}>
        <Text style={styles.Text_72_6051}>Connect and roll!</Text>
      </View>
      <View style={styles.View_72_6052}>
        <View style={styles.View_I72_6052_70_12231} />
        <View style={styles.View_I72_6052_70_12232}>
          <View style={styles.View_I72_6052_70_12233}>
            <Text style={styles.Text_I72_6052_70_12233}>
              In a fantasy game... what would be your job?
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c39/6dd4/3b77144222cc800bad82ca6c97bd574f"
          }}
          style={styles.ImageBackground_I72_6052_70_12234}
        />
        <View style={styles.View_I72_6052_70_12237}>
          <View style={styles.View_I72_6052_70_12237_45_1621} />
          <View style={styles.View_I72_6052_70_12237_45_1622}>
            <Text style={styles.Text_I72_6052_70_12237_45_1622}>Submit</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_76_6158}>
        <View style={styles.View_76_6159}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9635/e9da/c305de497d64caa2fa7ba098d84829a8"
            }}
            style={styles.ImageBackground_I76_6159_76_6133}
          />
        </View>
        <View style={styles.View_76_6160}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e64/e2c8/8d5a80ddb4e496fa02f57488d893b856"
            }}
            style={styles.ImageBackground_I76_6160_76_6134}
          />
        </View>
        <View style={styles.View_76_6161}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a86/0eee/cf7b2f863323b22c67c453d1d1bdcd92"
            }}
            style={styles.ImageBackground_I76_6161_76_6135}
          />
        </View>
        <View style={styles.View_76_6162}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e6a/c75e/f322bccbfeeca9941c035ef8339cf088"
            }}
            style={styles.ImageBackground_I76_6162_76_6136}
          />
        </View>
        <View style={styles.View_76_6163}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6eb6/061d/0c45f3f4932610bdd0da55a2e3c28f5d"
            }}
            style={styles.ImageBackground_I76_6163_76_6137}
          />
        </View>
        <View style={styles.View_76_6164}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e35/d8ba/3ed5979efd9b2a59bb21cde75bd21f79"
            }}
            style={styles.ImageBackground_I76_6164_76_6138}
          />
        </View>
        <View style={styles.View_76_6165}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5ce/57f9/2d176bfd912ec2e210b76310ca73a7ea"
            }}
            style={styles.ImageBackground_I76_6165_76_6139}
          />
        </View>
        <View style={styles.View_76_6166}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dce9/322d/af063395663afb9eaf5f7893e1cc1740"
            }}
            style={styles.ImageBackground_I76_6166_76_6140}
          />
        </View>
        <View style={styles.View_76_6167}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b031/55fd/e02839191abc30266aaa5ca4ae29d24c"
            }}
            style={styles.ImageBackground_I76_6167_76_6141}
          />
        </View>
        <View style={styles.View_76_6168}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3def/d40f/243278d20e7bd1b0062d307bb676a3dc"
            }}
            style={styles.ImageBackground_I76_6168_76_6142}
          />
        </View>
        <View style={styles.View_76_6169}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1da/e315/bdb4284373b15ea8f6847792b233c814"
            }}
            style={styles.ImageBackground_I76_6169_76_6143}
          />
        </View>
        <View style={styles.View_76_6170}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f70b/967b/9f667fbe11b11654c9bea63f994b5df3"
            }}
            style={styles.ImageBackground_I76_6170_76_6144}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_72_6049: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I72_6049_17_223: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I72_6049_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I72_6049_17_224: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I72_6049_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I72_6049_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I72_6049_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I72_6049_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I72_6049_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I72_6049_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I72_6049_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I72_6049_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I72_6049_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I72_6049_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I72_6049_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I72_6049_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I72_6049_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I72_6049_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_6050: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I72_6050_8_613: {
    flexGrow: 1,
    width: wp("55%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_72_6051: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_72_6051: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_72_6052: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I72_6052_70_12231: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I72_6052_70_12232: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I72_6052_70_12233: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I72_6052_70_12233: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I72_6052_70_12234: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_I72_6052_70_12237: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I72_6052_70_12237_45_1621: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 4, 4, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_I72_6052_70_12237_45_1622: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I72_6052_70_12237_45_1622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_76_6158: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("52%")
  },
  View_76_6159: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6159_76_6133: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6160: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6160_76_6134: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6161: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6161_76_6135: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6162: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6162_76_6136: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6163: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6163_76_6137: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6164: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6164_76_6138: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6165: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6165_76_6139: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6166: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6166_76_6140: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6167: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6167_76_6141: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6168: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6168_76_6142: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6169: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6169_76_6143: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_76_6170: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I76_6170_76_6144: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
