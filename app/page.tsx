import { Card, Row, Col, Statistic } from 'antd';
import {
  WalletOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Financial Dashboard</h1>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Total Balance"
              value={5240.50}
              precision={2}
              prefix={<WalletOutlined />}
              suffix="USD"
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Income"
              value={1840.00}
              precision={2}
              prefix={<ArrowUpOutlined />}
              valueStyle={{ color: '#3f8600' }}
              suffix="USD"
            />
          </Card>
        </Col>
        
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <Statistic
              title="Expenses"
              value={640.20}
              precision={2}
              prefix={<ArrowDownOutlined />}
              valueStyle={{ color: '#cf1322' }}
              suffix="USD"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}