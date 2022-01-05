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
      <View style={styles.View_52_3556}>
        <View style={styles.View_I52_3556_17_223}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a14/c78e/a1b75fc290001c17e3efc91c41de66d5"
            }}
            style={styles.ImageBackground_I52_3556_17_223_11_116}
          />
        </View>
        <View style={styles.View_I52_3556_17_224}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5a/088d/33e8ca1726e674fe34c3aaf9bfc72ebb"
            }}
            style={styles.ImageBackground_I52_3556_17_224_11_127}
          />
          <View style={styles.View_I52_3556_17_224_11_128}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I52_3556_17_224_11_129}
            />
            <View style={styles.View_I52_3556_17_224_11_130}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4fb/ca8a/83545d9467479da1f143d296c158ca39"
                }}
                style={styles.ImageBackground_I52_3556_17_224_11_131}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7784/bba3/f569ed909f9f283580516e2682ac80cf"
                }}
                style={styles.ImageBackground_I52_3556_17_224_11_132}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a828/db86/6fc831f1fa4353fa15152239b7b2c006"
                }}
                style={styles.ImageBackground_I52_3556_17_224_11_135}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4c/96ea/99e18e552cd5f916f6b3b51b1cba4d9a"
                }}
                style={styles.ImageBackground_I52_3556_17_224_11_138}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ba1/08a9/d1fb457e72979eaf3e31769935dddc1c"
                }}
                style={styles.ImageBackground_I52_3556_17_224_11_141}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9f8/4ba8/589b3326358ffb1243c928cdadb1f605"
              }}
              style={styles.ImageBackground_I52_3556_17_224_11_142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39e2/c080/a0ab0a86a7dafd5eac31d1f8a815a699"
              }}
              style={styles.ImageBackground_I52_3556_17_224_11_148}
            />
            <View style={styles.View_I52_3556_17_224_11_155}>
              <View style={styles.View_I52_3556_17_224_11_156}>
                <Text style={styles.Text_I52_3556_17_224_11_156}>12:30</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_53_3596}>
        <View style={styles.View_I53_3596_17_1228}>
          <View style={styles.View_I53_3596_17_1228_17_1192} />
          <View style={styles.View_I53_3596_17_1228_17_1193}>
            <View style={styles.View_I53_3596_17_1228_17_1194}>
              <View style={styles.View_I53_3596_17_1228_17_1195} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb0/7ac2/2ddc4bd15d404d46ba0366dd8eb1b0ac"
                }}
                style={styles.ImageBackground_I53_3596_17_1228_17_1196}
              />
            </View>
            <View style={styles.View_I53_3596_17_1228_17_1197}>
              <View style={styles.View_I53_3596_17_1228_17_1198} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d11e/1c66/718270e29b669bcc9cd67bb7efb8de63"
                }}
                style={styles.ImageBackground_I53_3596_17_1228_17_1199}
              />
            </View>
            <View style={styles.View_I53_3596_17_1228_17_1200}>
              <View style={styles.View_I53_3596_17_1228_17_1201} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bd/05ab/9dc8b81f0aa912820047887dfb21299a"
                }}
                style={styles.ImageBackground_I53_3596_17_1228_17_1202}
              />
            </View>
          </View>
          <View style={styles.View_I53_3596_17_1228_17_1203}>
            <View style={styles.View_I53_3596_17_1228_17_1204}>
              <Text style={styles.Text_I53_3596_17_1228_17_1204}>
                Online Table Details
              </Text>
            </View>
          </View>
          <View style={styles.View_I53_3596_17_1228_17_1206}>
            <View style={styles.View_I53_3596_17_1228_17_1207} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ff9/72c9/70ee6a6b72a60e6aa1c96214371fe519"
              }}
              style={styles.ImageBackground_I53_3596_17_1228_17_1209}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_104_11147}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ff/0287/3c533ef6e92d07c921b76646974ad0ef"
          }}
          style={styles.ImageBackground_I104_11147_104_11140}
        />
        <View style={styles.View_I104_11147_104_11141}>
          <Text style={styles.Text_I104_11147_104_11141}>The False King</Text>
        </View>
      </View>
      <View style={styles.View_60_5622}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6468/d173/ee73e66327ab20d9daf86a9970f9e1b4"
          }}
          style={styles.ImageBackground_I60_5622_60_5458}
        />
        <View style={styles.View_I60_5622_60_5448}>
          <View style={styles.View_I60_5622_60_5449}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be93/eb33/ff7ecd6a37c3281e780537b32ac3f920"
              }}
              style={styles.ImageBackground_I60_5622_60_5450}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b23b/dae2/3d9451e2856193c336864bbaf3827b69"
            }}
            style={styles.ImageBackground_I60_5622_60_5452}
          />
          <View style={styles.View_I60_5622_60_5454}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4324/0095/d7be0ef179058c0f8a6fb80001b5b438"
              }}
              style={styles.ImageBackground_I60_5622_60_5455}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_56_4611}>
        <View style={styles.View_I56_4611_56_3801} />
        <View style={styles.View_I56_4611_56_3802}>
          <View style={styles.View_I56_4611_56_3802_56_3025}>
            <View style={styles.View_I56_4611_56_3802_56_3025_54_3684}>
              <View style={styles.View_I56_4611_56_3802_56_3025_54_3698}>
                <View style={styles.View_I56_4611_56_3802_56_3025_54_3742}>
                  <View style={styles.View_I56_4611_56_3802_56_3025_54_5897}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c819/6341/71d33af7a68e51f64d99538a1515c96a"
                      }}
                      style={
                        styles.ImageBackground_I56_4611_56_3802_56_3025_54_5898
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I56_4611_56_3802_56_3025_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3802_56_3025_54_3655}>
                    Recorded or streamed
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3802_56_3025_54_3706}>
              <View style={styles.View_I56_4611_56_3802_56_3025_54_3672}>
                <Text style={styles.Text_I56_4611_56_3802_56_3025_54_3672}>
                  https://twitch.tv/...
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3025_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3025_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3802_56_3026}>
            <View style={styles.View_I56_4611_56_3802_56_3026_54_3684}>
              <View style={styles.View_I56_4611_56_3802_56_3026_54_3698}>
                <View style={styles.View_I56_4611_56_3802_56_3026_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c361/f9ef/a8ae0353d776b299c505c590bb00d66f"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3802_56_3026_54_5634
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3802_56_3026_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3802_56_3026_54_3655}>
                    Content warnings
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3802_56_3026_54_3706}>
              <View style={styles.View_I56_4611_56_3802_56_3026_54_3672}>
                <Text style={styles.Text_I56_4611_56_3802_56_3026_54_3672}>
                  Violence, sex, suicide, drugs
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3026_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3026_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3802_56_3027}>
            <View style={styles.View_I56_4611_56_3802_56_3027_54_3684}>
              <View style={styles.View_I56_4611_56_3802_56_3027_54_3698}>
                <View style={styles.View_I56_4611_56_3802_56_3027_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21ae/134c/9b5eb105d92ce88035646108efd5c16f"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3802_56_3027_54_5400
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3802_56_3027_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3802_56_3027_54_3655}>
                    Adult Content
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3802_56_3027_54_3706}>
              <View style={styles.View_I56_4611_56_3802_56_3027_54_3672}>
                <Text style={styles.Text_I56_4611_56_3802_56_3027_54_3672}>
                  Yes
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3027_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3027_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3802_56_3028}>
            <View style={styles.View_I56_4611_56_3802_56_3028_54_3684}>
              <View style={styles.View_I56_4611_56_3802_56_3028_54_3698}>
                <View style={styles.View_I56_4611_56_3802_56_3028_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee0b/5b58/8749e05047147fcfd2f13a7ea1cbc06b"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3802_56_3028_54_5183
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3802_56_3028_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3802_56_3028_54_3655}>
                    Accept new players
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3802_56_3028_54_3706}>
              <View style={styles.View_I56_4611_56_3802_56_3028_54_3672}>
                <Text style={styles.Text_I56_4611_56_3802_56_3028_54_3672}>
                  Yes
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3028_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3028_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3802_56_3029}>
            <View style={styles.View_I56_4611_56_3802_56_3029_54_3684}>
              <View style={styles.View_I56_4611_56_3802_56_3029_54_3698}>
                <View style={styles.View_I56_4611_56_3802_56_3029_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e755/2397/7109739a2a675bb4c050976966b46cba"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3802_56_3029_54_5001
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3802_56_3029_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3802_56_3029_54_3655}>
                    Safety Tools
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3802_56_3029_54_3706}>
              <View style={styles.View_I56_4611_56_3802_56_3029_54_3672}>
                <Text style={styles.Text_I56_4611_56_3802_56_3029_54_3672}>
                  X Card, Lines and Veils
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3029_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3029_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3802_56_3030}>
            <View style={styles.View_I56_4611_56_3802_56_3030_56_2481}>
              <View style={styles.View_I56_4611_56_3802_56_3030_56_2464} />
              <View style={styles.View_I56_4611_56_3802_56_3030_56_2465}>
                <Text style={styles.Text_I56_4611_56_3802_56_3030_56_2465}>
                  User Agreement
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c75/e16b/d319fcdbd6733d93e210a0ebdfc61ffe"
              }}
              style={styles.ImageBackground_I56_4611_56_3802_56_3030_56_2466}
            />
          </View>
        </View>
        <View style={styles.View_I56_4611_56_3803}>
          <View style={styles.View_I56_4611_56_3803_56_2906}>
            <View style={styles.View_I56_4611_56_3803_56_2906_54_3684}>
              <View style={styles.View_I56_4611_56_3803_56_2906_54_3698}>
                <View style={styles.View_I56_4611_56_3803_56_2906_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/428b/c81d/6485f024af86b6ce11d1c3bae1a139b1"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3803_56_2906_54_4839
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3803_56_2906_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3803_56_2906_54_3655}>
                    VTT App
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3803_56_2906_54_3706}>
              <View style={styles.View_I56_4611_56_3803_56_2906_54_3672}>
                <Text style={styles.Text_I56_4611_56_3803_56_2906_54_3672}>
                  Roll20
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3803_56_2906_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3803_56_2906_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3803_56_2907}>
            <View style={styles.View_I56_4611_56_3803_56_2907_54_3684}>
              <View style={styles.View_I56_4611_56_3803_56_2907_54_3698}>
                <View style={styles.View_I56_4611_56_3803_56_2907_54_3742}>
                  <View style={styles.View_I56_4611_56_3803_56_2907_54_4672}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98f3/5f0b/97e64cb957fa350372a3b4fdefad7ccb"
                      }}
                      style={
                        styles.ImageBackground_I56_4611_56_3803_56_2907_54_4673
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I56_4611_56_3803_56_2907_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3803_56_2907_54_3655}>
                    Voice / Video App
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3803_56_2907_54_3706}>
              <View style={styles.View_I56_4611_56_3803_56_2907_54_3672}>
                <Text style={styles.Text_I56_4611_56_3803_56_2907_54_3672}>
                  Discord
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3803_56_2907_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3803_56_2907_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3803_56_2908}>
            <View style={styles.View_I56_4611_56_3803_56_2908_56_2481}>
              <View style={styles.View_I56_4611_56_3803_56_2908_56_2464} />
              <View style={styles.View_I56_4611_56_3803_56_2908_56_2465}>
                <Text style={styles.Text_I56_4611_56_3803_56_2908_56_2465}>
                  Online Table
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c75/e16b/d319fcdbd6733d93e210a0ebdfc61ffe"
              }}
              style={styles.ImageBackground_I56_4611_56_3803_56_2908_56_2466}
            />
          </View>
        </View>
        <View style={styles.View_I56_4611_56_3804}>
          <View style={styles.View_I56_4611_56_3804_56_2731}>
            <View style={styles.View_I56_4611_56_3804_56_2731_54_3684}>
              <View style={styles.View_I56_4611_56_3804_56_2731_54_3698}>
                <View style={styles.View_I56_4611_56_3804_56_2731_54_3742}>
                  <View style={styles.View_I56_4611_56_3804_56_2731_54_4527}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9064/de5c/4814bf663cce43f9f28b2270450c2236"
                      }}
                      style={
                        styles.ImageBackground_I56_4611_56_3804_56_2731_54_4528
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I56_4611_56_3804_56_2731_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3804_56_2731_54_3655}>
                    Next session
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3804_56_2731_54_3706}>
              <View style={styles.View_I56_4611_56_3804_56_2731_54_3672}>
                <Text style={styles.Text_I56_4611_56_3804_56_2731_54_3672}>
                  19/05/2022 18:00 GMT+1
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2731_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2731_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3804_56_2732}>
            <View style={styles.View_I56_4611_56_3804_56_2732_54_3684}>
              <View style={styles.View_I56_4611_56_3804_56_2732_54_3698}>
                <View style={styles.View_I56_4611_56_3804_56_2732_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/322f/be0b/9d87bafd878687e7263166f7fe4d348c"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3804_56_2732_54_4429
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3804_56_2732_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3804_56_2732_54_3655}>
                    Duration
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3804_56_2732_54_3706}>
              <View style={styles.View_I56_4611_56_3804_56_2732_54_3672}>
                <Text style={styles.Text_I56_4611_56_3804_56_2732_54_3672}>
                  4 hours
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2732_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2732_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3804_56_2733}>
            <View style={styles.View_I56_4611_56_3804_56_2733_54_3684}>
              <View style={styles.View_I56_4611_56_3804_56_2733_54_3698}>
                <View style={styles.View_I56_4611_56_3804_56_2733_54_3742}>
                  <View style={styles.View_I56_4611_56_3804_56_2733_54_4316}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be1f/3bb0/5929957bdf1bbe49ae47e85de352512f"
                      }}
                      style={
                        styles.ImageBackground_I56_4611_56_3804_56_2733_54_4317
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I56_4611_56_3804_56_2733_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3804_56_2733_54_3655}>
                    Frequency
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3804_56_2733_54_3706}>
              <View style={styles.View_I56_4611_56_3804_56_2733_54_3672}>
                <Text style={styles.Text_I56_4611_56_3804_56_2733_54_3672}>
                  Every two weeks
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2733_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2733_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3804_56_2734}>
            <View style={styles.View_I56_4611_56_3804_56_2734_56_2481}>
              <View style={styles.View_I56_4611_56_3804_56_2734_56_2464} />
              <View style={styles.View_I56_4611_56_3804_56_2734_56_2465}>
                <Text style={styles.Text_I56_4611_56_3804_56_2734_56_2465}>
                  Date and Time
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c75/e16b/d319fcdbd6733d93e210a0ebdfc61ffe"
              }}
              style={styles.ImageBackground_I56_4611_56_3804_56_2734_56_2466}
            />
          </View>
        </View>
        <View style={styles.View_I56_4611_56_3805}>
          <View style={styles.View_I56_4611_56_3805_56_2500}>
            <View style={styles.View_I56_4611_56_3805_56_2500_54_3684}>
              <View style={styles.View_I56_4611_56_3805_56_2500_54_3698}>
                <View style={styles.View_I56_4611_56_3805_56_2500_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06d2/59dc/ed16a5d60ea80ec63ecf64157a9443c8"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3805_56_2500_54_4258
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3805_56_2500_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3805_56_2500_54_3655}>
                    Language
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3805_56_2500_54_3706}>
              <View style={styles.View_I56_4611_56_3805_56_2500_54_3672}>
                <Text style={styles.Text_I56_4611_56_3805_56_2500_54_3672}>
                  Spanish
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2500_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2500_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3805_56_2501}>
            <View style={styles.View_I56_4611_56_3805_56_2501_54_3684}>
              <View style={styles.View_I56_4611_56_3805_56_2501_54_3698}>
                <View style={styles.View_I56_4611_56_3805_56_2501_54_3742}>
                  <View style={styles.View_I56_4611_56_3805_56_2501_54_3968}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9125/7cc3/f244c573fba83dea44d0bffb3dee794b"
                      }}
                      style={
                        styles.ImageBackground_I56_4611_56_3805_56_2501_54_3969
                      }
                    />
                  </View>
                </View>
                <View style={styles.View_I56_4611_56_3805_56_2501_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3805_56_2501_54_3655}>
                    Playing
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3805_56_2501_54_3706}>
              <View style={styles.View_I56_4611_56_3805_56_2501_54_3672}>
                <Text style={styles.Text_I56_4611_56_3805_56_2501_54_3672}>
                  DnD 5e
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2501_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2501_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3805_56_2502}>
            <View style={styles.View_I56_4611_56_3805_56_2502_54_3684}>
              <View style={styles.View_I56_4611_56_3805_56_2502_54_3698}>
                <View style={styles.View_I56_4611_56_3805_56_2502_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3bc/7aec/c9b18781f16c539e04bb0d3ccc13b9ae"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3805_56_2502_54_3878
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3805_56_2502_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3805_56_2502_54_3655}>
                    Players
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3805_56_2502_54_3706}>
              <View style={styles.View_I56_4611_56_3805_56_2502_54_3672}>
                <Text style={styles.Text_I56_4611_56_3805_56_2502_54_3672}>
                  4/4
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2502_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2502_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3805_56_2503}>
            <View style={styles.View_I56_4611_56_3805_56_2503_54_3684}>
              <View style={styles.View_I56_4611_56_3805_56_2503_54_3698}>
                <View style={styles.View_I56_4611_56_3805_56_2503_54_3742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4472/3ee8/a52dee07feb9f5d756d85797aa0a813d"
                    }}
                    style={
                      styles.ImageBackground_I56_4611_56_3805_56_2503_54_3653
                    }
                  />
                </View>
                <View style={styles.View_I56_4611_56_3805_56_2503_54_3655}>
                  <Text style={styles.Text_I56_4611_56_3805_56_2503_54_3655}>
                    Master
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I56_4611_56_3805_56_2503_54_3706}>
              <View style={styles.View_I56_4611_56_3805_56_2503_54_3672}>
                <Text style={styles.Text_I56_4611_56_3805_56_2503_54_3672}>
                  @ArcaneSloth
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21c1/0205/cbd62e4c17ea09dba7e0eb9f42f8f4e6"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2503_54_3656}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecc1/5034/b39e1e2dee80a09b8f8ce449a5ddf8f5"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2503_54_3657}
            />
          </View>
          <View style={styles.View_I56_4611_56_3805_56_2504}>
            <View style={styles.View_I56_4611_56_3805_56_2504_56_2481}>
              <View style={styles.View_I56_4611_56_3805_56_2504_56_2464} />
              <View style={styles.View_I56_4611_56_3805_56_2504_56_2465}>
                <Text style={styles.Text_I56_4611_56_3805_56_2504_56_2465}>
                  General
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c75/e16b/d319fcdbd6733d93e210a0ebdfc61ffe"
              }}
              style={styles.ImageBackground_I56_4611_56_3805_56_2504_56_2466}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_52_3556: {
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
  View_I52_3556_17_223: {
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
  ImageBackground_I52_3556_17_223_11_116: {
    flexGrow: 1,
    width: wp("102%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I52_3556_17_224: {
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
  ImageBackground_I52_3556_17_224_11_127: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I52_3556_17_224_11_128: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%")
  },
  View_I52_3556_17_224_11_129: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I52_3556_17_224_11_130: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I52_3556_17_224_11_131: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I52_3556_17_224_11_132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I52_3556_17_224_11_135: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I52_3556_17_224_11_138: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I52_3556_17_224_11_141: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I52_3556_17_224_11_142: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I52_3556_17_224_11_148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%")
  },
  View_I52_3556_17_224_11_155: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_I52_3556_17_224_11_156: {
    width: wp("9%"),
    minWidth: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I52_3556_17_224_11_156: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_3596: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_3596_17_1228: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_3596_17_1228_17_1192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I53_3596_17_1228_17_1193: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I53_3596_17_1228_17_1194: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I53_3596_17_1228_17_1195: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I53_3596_17_1228_17_1196: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I53_3596_17_1228_17_1197: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%")
  },
  View_I53_3596_17_1228_17_1198: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I53_3596_17_1228_17_1199: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I53_3596_17_1228_17_1200: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_I53_3596_17_1228_17_1201: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I53_3596_17_1228_17_1202: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I53_3596_17_1228_17_1203: {
    flexGrow: 1,
    width: wp("47%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_3596_17_1228_17_1204: {
    flexGrow: 1,
    width: wp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I53_3596_17_1228_17_1204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.030000001192092896,
    textTransform: "none"
  },
  View_I53_3596_17_1228_17_1206: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I53_3596_17_1228_17_1207: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I53_3596_17_1228_17_1209: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_104_11147: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I104_11147_104_11140: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I104_11147_104_11141: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_I104_11147_104_11141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_60_5622: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I60_5622_60_5458: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I60_5622_60_5448: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I60_5622_60_5449: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I60_5622_60_5450: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I60_5622_60_5452: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_I60_5622_60_5454: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I60_5622_60_5455: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_56_4611: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3801: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("144%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0
  },
  View_I56_4611_56_3802: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("101%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3025: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3025_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3802_56_3025_54_3698: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3025_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3025_54_5897: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I56_4611_56_3802_56_3025_54_5898: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3802_56_3025_54_3655: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3025_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3802_56_3025_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3025_54_3672: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3025_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3802_56_3025_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3802_56_3025_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3026: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3026_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3802_56_3026_54_3698: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3026_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3802_56_3026_54_5634: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3802_56_3026_54_3655: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3026_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3802_56_3026_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3026_54_3672: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3026_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3802_56_3026_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3802_56_3026_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3027: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3027_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3802_56_3027_54_3698: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3802_56_3027_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3802_56_3027_54_5400: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3802_56_3027_54_3655: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3027_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3802_56_3027_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3027_54_3672: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3027_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3802_56_3027_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3802_56_3027_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3028: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3028_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3802_56_3028_54_3698: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3028_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3802_56_3028_54_5183: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3802_56_3028_54_3655: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3028_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3802_56_3028_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3028_54_3672: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3028_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3802_56_3028_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3802_56_3028_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3029: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3029_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3802_56_3029_54_3698: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3802_56_3029_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3802_56_3029_54_5001: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3802_56_3029_54_3655: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3029_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3802_56_3029_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3029_54_3672: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3029_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3802_56_3029_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3802_56_3029_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3802_56_3030: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3030_56_2481: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3802_56_3030_56_2464: {
    width: wp("43%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I56_4611_56_3802_56_3030_56_2465: {
    width: wp("35%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3802_56_3030_56_2465: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3802_56_3030_56_2466: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I56_4611_56_3803: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2906: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2906_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3803_56_2906_54_3698: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3803_56_2906_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3803_56_2906_54_4839: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3803_56_2906_54_3655: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3803_56_2906_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3803_56_2906_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2906_54_3672: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3803_56_2906_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3803_56_2906_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3803_56_2906_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3803_56_2907: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2907_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3803_56_2907_54_3698: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_I56_4611_56_3803_56_2907_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2907_54_4672: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I56_4611_56_3803_56_2907_54_4673: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I56_4611_56_3803_56_2907_54_3655: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3803_56_2907_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3803_56_2907_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2907_54_3672: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3803_56_2907_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3803_56_2907_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3803_56_2907_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3803_56_2908: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2908_56_2481: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3803_56_2908_56_2464: {
    width: wp("43%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I56_4611_56_3803_56_2908_56_2465: {
    width: wp("26%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3803_56_2908_56_2465: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3803_56_2908_56_2466: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I56_4611_56_3804: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2731: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2731_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3804_56_2731_54_3698: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3804_56_2731_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2731_54_4527: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I56_4611_56_3804_56_2731_54_4528: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3804_56_2731_54_3655: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2731_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3804_56_2731_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2731_54_3672: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2731_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3804_56_2731_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3804_56_2731_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3804_56_2732: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2732_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3804_56_2732_54_3698: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3804_56_2732_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3804_56_2732_54_4429: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3804_56_2732_54_3655: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2732_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3804_56_2732_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2732_54_3672: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2732_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3804_56_2732_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3804_56_2732_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3804_56_2733: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2733_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3804_56_2733_54_3698: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3804_56_2733_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2733_54_4316: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I56_4611_56_3804_56_2733_54_4317: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I56_4611_56_3804_56_2733_54_3655: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2733_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3804_56_2733_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2733_54_3672: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2733_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3804_56_2733_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3804_56_2733_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3804_56_2734: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2734_56_2481: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3804_56_2734_56_2464: {
    width: wp("43%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I56_4611_56_3804_56_2734_56_2465: {
    width: wp("31%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3804_56_2734_56_2465: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3804_56_2734_56_2466: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I56_4611_56_3805: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2500: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2500_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3805_56_2500_54_3698: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3805_56_2500_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3805_56_2500_54_4258: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3805_56_2500_54_3655: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2500_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3805_56_2500_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2500_54_3672: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2500_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3805_56_2500_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3805_56_2500_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3805_56_2501: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2501_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3805_56_2501_54_3698: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3805_56_2501_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2501_54_3968: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I56_4611_56_3805_56_2501_54_3969: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I56_4611_56_3805_56_2501_54_3655: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2501_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3805_56_2501_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2501_54_3672: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2501_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3805_56_2501_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3805_56_2501_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3805_56_2502: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2502_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3805_56_2502_54_3698: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3805_56_2502_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3805_56_2502_54_3878: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3805_56_2502_54_3655: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2502_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3805_56_2502_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2502_54_3672: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2502_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3805_56_2502_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3805_56_2502_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3805_56_2503: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2503_54_3684: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I56_4611_56_3805_56_2503_54_3698: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_I56_4611_56_3805_56_2503_54_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_4611_56_3805_56_2503_54_3653: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_4611_56_3805_56_2503_54_3655: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2503_54_3655: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_4611_56_3805_56_2503_54_3706: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2503_54_3672: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2503_54_3672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3805_56_2503_54_3656: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_I56_4611_56_3805_56_2503_54_3657: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I56_4611_56_3805_56_2504: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2504_56_2481: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_4611_56_3805_56_2504_56_2464: {
    width: wp("43%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I56_4611_56_3805_56_2504_56_2465: {
    width: wp("17%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    justifyContent: "center"
  },
  Text_I56_4611_56_3805_56_2504_56_2465: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I56_4611_56_3805_56_2504_56_2466: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
