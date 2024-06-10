(function(Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('This extension must run unsandboxed');
    }
  
    class HelloWorld {
      getInfo() {
        return {
          id: 'notification',
          name: 'Notify',
          blocks: [
            {
              opcode:'sendnotification',
              blockType: Scratch.BlockType.COMMAND,
              text: 'Notify [TITLE] [BODY]',
              arguments: {
                TITLE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Title'
                },
                BODY: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'Body'
                }
              }
            },
            {
                opcode:'sendtaggednotif',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Dynamic Notify [TITLE] [BODY] [TAG]',
                arguments: {
                  TITLE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Title'
                  },
                  BODY: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Body'
                  },
                  TAG: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Tag'
                  }
                }
              },
              {
                opcode:'sendimgnotif',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Image Notify [TITLE] [BODY] [IMG]',
                arguments: {
                  TITLE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Title'
                  },
                  BODY: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'Body'
                  },
                  IMG: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'https://extensions.turbowarp.org/dango.png'
                  }
                }
              },
                {
                opcode:'haspermissionnotif',
                blockType: Scratch.BlockType.BOOLEAN,
                text: 'has notification permission?',
                }
          ]
        };
      }
      sendnotification(args) {
        Notification.requestPermission().then(perm => {
            if (perm === "granted") {
                new Notification(args.TITLE, {
                    body: args.BODY,
                })
            } else {
                throw new error('Error: couldnt get notification permission from browser')
            }
        })
      }
      sendtaggednotif(args) {
        Notification.requestPermission().then(perm => {
            if (perm === "granted") {
                new Notification(args.TITLE, {
                    body: args.BODY,
                    tag: args.TAG,
                })
            } else {
                throw new error('Error: couldnt get notification permission from browser')
            }
        })
      }
      sendimgnotif(args) {
        Notification.requestPermission().then(perm => {
            if (perm === "granted") {
                new Notification(args.TITLE, {
                    body: args.BODY,
                    icon: args.IMG,
                })
            } else {
                throw new error('Error: couldnt get notification permission from browser')
            }
        })
      }
        haspermissionnotif() {
        Notification.requestPermission().then(perm => {
            if (perm === "granted") {
                return true;
            } else {
                return false;
            }
        })
      }
    }
    Scratch.extensions.register(new HelloWorld());
  })(Scratch);
