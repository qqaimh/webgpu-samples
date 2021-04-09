_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"+D0c":function(e,n){e.exports="/webgpu-samples/_next/static/fee692aa63e7fca506f31d6bd472c045.webm"},Ejpj:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),a=t.n(r),o=t("HaE+"),i=t("SoUo"),s=t("PpzT");function u(){return(u=Object(o.a)(a.a.mark((function e(n,r){var o,i,u,l,p,m,g,f,v,x,h,y,w;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=document.createElement("video")).loop=!0,o.autoplay=!0,o.muted=!0,o.src=t("+D0c"),e.next=7,o.play();case 7:return e.next=9,navigator.gpu.requestAdapter();case 9:return i=e.sent,e.next=12,i.requestDevice();case 12:return u=e.sent,e.next=15,Object(s.a)();case 15:return l=e.sent,p=n.getContext("gpupresent"),m="bgra8unorm",g=new Float32Array([1,1,0,1,0,1,-1,0,1,1,-1,-1,0,0,1,1,1,0,1,0,-1,-1,0,0,1,-1,1,0,0,0]),f=u.createBuffer({size:g.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(f.getMappedRange()).set(g),f.unmap(),v=p.configureSwapChain({device:u,format:m}),x=u.createRenderPipeline({vertex:{module:r?u.createShaderModule({code:d.vertex}):u.createShaderModule({code:c.vertex,transform:function(e){return l.compileGLSL(e,"vertex")}}),entryPoint:"main",buffers:[{arrayStride:20,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:12,format:"float32x2"}]}]},fragment:{module:r?u.createShaderModule({code:d.fragment}):u.createShaderModule({code:c.fragment,transform:function(e){return l.compileGLSL(e,"fragment")}}),entryPoint:"main",targets:[{format:m}]},primitive:{topology:"triangle-list"}}),h=u.createSampler({magFilter:"linear",minFilter:"linear"}),y=u.createTexture({size:{width:o.videoWidth,height:o.videoHeight},format:"rgba8unorm",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.SAMPLED}),w=u.createBindGroup({layout:x.getBindGroupLayout(0),entries:[{binding:0,resource:h},{binding:1,resource:y.createView()}]}),e.abrupt("return",(function(){createImageBitmap(o).then((function(e){u.queue.copyImageBitmapToTexture({imageBitmap:e,origin:{x:0,y:0}},{texture:y},{width:o.videoWidth,height:o.videoHeight});var n=u.createCommandEncoder(),t={colorAttachments:[{attachment:v.getCurrentTexture().createView(),loadValue:{r:0,g:0,b:0,a:1}}]},r=n.beginRenderPass(t);r.setPipeline(x),r.setVertexBuffer(0,f),r.setBindGroup(0,w),r.draw(6,1,0,0),r.endPass(),u.queue.submit([n.finish()])}))}));case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var c={vertex:"#version 450\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  fragUV = uv;\n}\n",fragment:"#version 450\nlayout(set = 0, binding = 0) uniform sampler mySampler;\nlayout(set = 0, binding = 1) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = texture(sampler2D(myTexture, mySampler), fragUV);\n}\n"},d={vertex:"\nstruct VertexInput {\n  [[location(0)]] position : vec3<f32>;\n  [[location(1)]] uv : vec2<f32>;\n};\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragUV : vec2<f32>;\n};\n\n[[stage(vertex)]]\nfn main(input : VertexInput) -> VertexOutput {\n  return VertexOutput(vec4<f32>(input.position, 1.0), input.uv);\n}\n",fragment:"\n[[binding(0), group(0)]] var mySampler: sampler;\n[[binding(1), group(0)]] var myTexture: texture_2d<f32>;\n\n[[stage(fragment)]]\nfn main([[location(0)]] fragUV : vec2<f32>) -> [[location(0)]] vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n"};n.default=Object(i.c)({name:"Video Uploading",description:"This example shows how to upload video frame to WebGPU.",slug:"videoUploading",init:function(e,n){return u.apply(this,arguments)},glslShaders:c,wgslShaders:d,source:"import { makeBasicExample } from '../../components/basicExample';\nimport glslangModule from '../../glslang';\n\nasync function init(canvas: HTMLCanvasElement, useWGSL: boolean) {\n  // Set video element\n  const video = document.createElement('video');\n  video.loop = true;\n  video.autoplay = true;\n  video.muted = true;\n  video.src = require('../../../assets/video/pano.webm');\n  await video.play();\n\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const glslang = await glslangModule();\n  const context = canvas.getContext('gpupresent');\n\n  const swapChainFormat = 'bgra8unorm';\n\n  // prettier-ignore\n  const rectVerts = new Float32Array([\n    1.0,  1.0, 0.0, 1.0, 0.0,\n    1.0, -1.0, 0.0, 1.0, 1.0,\n    -1.0, -1.0, 0.0, 0.0, 1.0,\n    1.0,  1.0, 0.0, 1.0, 0.0,\n    -1.0, -1.0, 0.0, 0.0, 1.0,\n    -1.0,  1.0, 0.0, 0.0, 0.0,\n  ]);\n\n  const verticesBuffer = device.createBuffer({\n    size: rectVerts.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(rectVerts);\n  verticesBuffer.unmap();\n\n  const swapChain = context.configureSwapChain({\n    device,\n    format: swapChainFormat,\n  });\n\n  const pipeline = device.createRenderPipeline({\n    vertex: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.vertex,\n          })\n        : device.createShaderModule({\n            code: glslShaders.vertex,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'vertex'),\n          }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: 20,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float32x3',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: 12,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: useWGSL\n        ? device.createShaderModule({\n            code: wgslShaders.fragment,\n          })\n        : device.createShaderModule({\n            code: glslShaders.fragment,\n            transform: (glsl) => glslang.compileGLSL(glsl, 'fragment'),\n          }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: swapChainFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const videoTexture = device.createTexture({\n    size: {\n      width: video.videoWidth,\n      height: video.videoHeight,\n    },\n    format: 'rgba8unorm',\n    usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.SAMPLED,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: sampler,\n      },\n      {\n        binding: 1,\n        resource: videoTexture.createView(),\n      },\n    ],\n  });\n\n  return function frame() {\n    createImageBitmap(video).then((videoFrame) => {\n      device.queue.copyImageBitmapToTexture(\n        { imageBitmap: videoFrame, origin: { x: 0, y: 0 } },\n        { texture: videoTexture },\n        {\n          width: video.videoWidth,\n          height: video.videoHeight,\n        }\n      );\n\n      const commandEncoder = device.createCommandEncoder();\n      const textureView = swapChain.getCurrentTexture().createView();\n\n      const renderPassDescriptor = {\n        colorAttachments: [\n          {\n            attachment: textureView,\n            loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          },\n        ],\n      };\n\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n      passEncoder.setPipeline(pipeline);\n      passEncoder.setVertexBuffer(0, verticesBuffer);\n      passEncoder.setBindGroup(0, uniformBindGroup);\n      passEncoder.draw(6, 1, 0, 0);\n      passEncoder.endPass();\n      device.queue.submit([commandEncoder.finish()]);\n    });\n  };\n}\n\nconst glslShaders = {\n  vertex: `#version 450\nlayout(location = 0) in vec3 position;\nlayout(location = 1) in vec2 uv;\n\nlayout(location = 0) out vec2 fragUV;\n\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  fragUV = uv;\n}\n`,\n\n  fragment: `#version 450\nlayout(set = 0, binding = 0) uniform sampler mySampler;\nlayout(set = 0, binding = 1) uniform texture2D myTexture;\n\nlayout(location = 0) in vec2 fragUV;\nlayout(location = 0) out vec4 outColor;\n\nvoid main() {\n  outColor = texture(sampler2D(myTexture, mySampler), fragUV);\n}\n`,\n};\n\nconst wgslShaders = {\n  vertex: `\nstruct VertexInput {\n  [[location(0)]] position : vec3<f32>;\n  [[location(1)]] uv : vec2<f32>;\n};\n\nstruct VertexOutput {\n  [[builtin(position)]] Position : vec4<f32>;\n  [[location(0)]] fragUV : vec2<f32>;\n};\n\n[[stage(vertex)]]\nfn main(input : VertexInput) -> VertexOutput {\n  return VertexOutput(vec4<f32>(input.position, 1.0), input.uv);\n}\n`,\n\n  fragment: `\n[[binding(0), group(0)]] var mySampler: sampler;\n[[binding(1), group(0)]] var myTexture: texture_2d<f32>;\n\n[[stage(fragment)]]\nfn main([[location(0)]] fragUV : vec2<f32>) -> [[location(0)]] vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n`,\n};\n\nexport default makeBasicExample({\n  name: 'Video Uploading',\n  description: 'This example shows how to upload video frame to WebGPU.',\n  slug: 'videoUploading',\n  init,\n  glslShaders,\n  wgslShaders,\n  source: __SOURCE__,\n});\n"})},"tRp/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/samples/videoUploading",function(){return t("Ejpj")}])}},[["tRp/",0,1,4,2,3]]]);